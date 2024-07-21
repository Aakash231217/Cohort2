import hashlib
import json

def sha256_hash(input_string):
    sha256 = hashlib.sha256()
    sha256.update(input_string.encode('utf-8'))
    return sha256.hexdigest()

# Provided hash for comparison
provided_hash = "26c6f9703c762620476c83cea0122d31c7ab15b9a949aaae1cb933dcfc832ed0"

# Define operation name and variables
operation_name = "routeInfo"
variables = {
    "request": {
        "departure": "BLR",
        "arrival": "BKK",
        "searchCriteria": {
            "searchSegmentList": [
                {"departCity": "BLR", "arriveCity": "BKK"},
                {"departCity": "BKK", "arriveCity": "BLR"}
            ]
        },
        "tripType": "RT"
    }
}

# Prepare potential input strings
potential_inputs = [
    json.dumps({
        "operationName": operation_name,
        "variables": variables,
        "extensions": {
            "persistedQuery": {
                "version": 1
            }
        }
    }, separators=(',', ':')),
    json.dumps({
        "operationName": operation_name,
        "variables": variables,
    }, separators=(',', ':')),
    json.dumps({
        "variables": variables,
        "operationName": operation_name,
    }, separators=(',', ':')),
    json.dumps({
        "variables": variables,
        "operationName": operation_name,
        "extensions": {
            "persistedQuery": {
                "version": 1
            }
        }
    }, separators=(',', ':')),
]

# Test all potential input strings and print their hashes
for input_str in potential_inputs:
    generated_hash = sha256_hash(input_str)
    print(f"Input: {input_str}\nGenerated hash: {generated_hash}\nMatch: {generated_hash == provided_hash}\n")

# Additional potential strings
additional_inputs = [
    json.dumps({"operationName": operation_name, "variables": variables}),
    json.dumps({"variables": variables}),
    json.dumps({"variables": variables, "operationName": operation_name}),
    json.dumps({"variables": variables, "operationName": operation_name, "extensions": {"persistedQuery": {"version": 1}}}),
]

for input_str in additional_inputs:
    generated_hash = sha256_hash(input_str)
    print(f"Input: {input_str}\nGenerated hash: {generated_hash}\nMatch: {generated_hash == provided_hash}\n")

# Edge case with string concatenation
concatenated_inputs = [
    operation_name + json.dumps(variables, separators=(',', ':')),
    json.dumps(variables, separators=(',', ':')) + operation_name,
    operation_name + json.dumps({"operationName": operation_name, "variables": variables}, separators=(',', ':')),
    json.dumps({"operationName": operation_name, "variables": variables}, separators=(',', ':')) + operation_name,
]

for input_str in concatenated_inputs:
    generated_hash = sha256_hash(input_str)
    print(f"Input: {input_str}\nGenerated hash: {generated_hash}\nMatch: {generated_hash == provided_hash}\n")
