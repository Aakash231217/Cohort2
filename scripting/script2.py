import json
import hashlib
from itertools import permutations

def sha256_hash(input_string):
    sha256 = hashlib.sha256()
    sha256.update(input_string.encode('utf-8'))
    return sha256.hexdigest()

def generate_permutations(data):
    if isinstance(data, dict):
        items = data.items()
        return [dict(perm) for perm in permutations(items)]
    return [data]

def try_variations(variables):
    attempts = []

    # Basic combinations

    attempts.append(json.dumps(variables))
    attempts.append(f"{json.dumps(variables)}")
    attempts.append(f"{json.dumps(variables)}")
    
    # Reorder JSON keys
    variable_permutations = generate_permutations(variables)
    for perm in variable_permutations:
        attempts.append(json.dumps(perm))
        attempts.append(f"{json.dumps(perm)}")
        attempts.append(f"{json.dumps(perm)}")

    # Compact JSON (remove spaces and newlines)
    compact_json = json.dumps(variables, separators=(',', ':'))
    attempts.append(compact_json)
    attempts.append(f"{compact_json}")
    attempts.append(f"{compact_json}")

    # Try with some salt values
    salt = "some_known_salt"
    attempts.append(f"{json.dumps(variables)}{salt}")
    attempts.append(f"{salt}{json.dumps(variables)}")
    attempts.append(f"{json.dumps(variables)}{salt}")

    # Base64 encode
    base64_encoded = json.dumps(variables).encode('utf-8').decode('ascii')
    attempts.append(base64_encoded)
    attempts.append(f"{base64_encoded}")
    attempts.append(f"{base64_encoded}")

    return attempts

variables = {
    "operationName":"routeInfo","variables":{"request":{"departure":"BLR","arrival":"BKK","searchCriteria":{"searchSegmentList":[{"departCity":"BLR","arriveCity":"BKK"},{"departCity":"BKK","arriveCity":"BLR"}]},"tripType":"RT"}},"extensions":{"persistedQuery":{"version":1,}}
}

attempts = try_variations( variables)
for attempt in attempts:
    generated_hash = sha256_hash(attempt)
    print(f"Input: {attempt}")
    print(f"Generated hash: {generated_hash}")
    print(f"Matches: {generated_hash == '26c6f9703c762620476c83cea0122d31c7ab15b9a949aaae1cb933dcfc832ed0'}")
    print()

