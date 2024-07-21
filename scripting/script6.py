import requests
import re
import json
from jsbeautifier import beautify

def download_and_beautify_js(url):
    response = requests.get(url)
    if response.status_code == 200:
        beautified = beautify(response.text)
        return beautified
    else:
        print(f"Failed to download the file. Status code: {response.status_code}")
        return None

def analyze_js(content):
    # Look for GraphQL query definitions
    query_pattern = re.compile(r'query\s+(\w+)\s*\((.*?)\)\s*{([\s\S]*?)}', re.MULTILINE)
    queries = query_pattern.findall(content)

    # Look for sha256 usage
    sha256_pattern = re.compile(r'sha256:([^,}]+)')
    sha256_usages = sha256_pattern.findall(content)

    # Look for persistedQuery related code
    persisted_query_pattern = re.compile(r'persistedQuery[^}]+')
    persisted_query_usages = persisted_query_pattern.findall(content)

    return queries, sha256_usages, persisted_query_usages

url = "https://aw-s.tripcdn.com/modules/ibu/flight-online-web/modules/newSearchForm.3118b08f1a.js"
js_content = download_and_beautify_js(url)

if js_content:
    queries, sha256_usages, persisted_query_usages = analyze_js(js_content)
    
    print("GraphQL Queries:")
    for query in queries:
        print(f"Query Name: {query[0]}")
        print(f"Arguments: {query[1]}")
        print(f"Body: {query[2][:200]}...")  # Print first 200 characters of the query body
        print()

    print("SHA256 Usages:")
    for usage in sha256_usages:
        print(usage)
        print()

    print("Persisted Query Usages:")
    for usage in persisted_query_usages:
        print(usage)
        print()

    # Save the beautified JS to a file for manual inspection
    with open("beautified_newSearchForm.js", "w", encoding="utf-8") as f:
        f.write(js_content)
    print("Beautified JS saved to 'beautified_newSearchForm.js'")
else:
    print("Failed to analyze the JavaScript file.")