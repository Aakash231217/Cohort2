import json
import hashlib

def sha256_hash(input_string):
    sha256 = hashlib.sha256()
    sha256.update(input_string.encode('utf-8'))
    return sha256.hexdigest()

operation_name = "routeInfo"
variables = {
    "request": {
        "departure": "BLR",
        "arrival": "BKK",
        "searchCriteria": {
            "searchSegmentList": [
                {"departCity": "BLR", "arriveCity": "BKK"},
                {"departCity": "BKK", "arriveCity": "BLR"}
            ],
            "tripType": "RT"
        }
    }
}

# Try different combinations
attempts = [
    operation_name,
    json.dumps(variables),
    f"{operation_name}{json.dumps(variables)}",
    f"{json.dumps(variables)}{operation_name}",
    # Add more combinations here
]

for attempt in attempts:
    generated_hash = sha256_hash(attempt)
    print(f"Input: {attempt}")
    print(f"Generated hash: {generated_hash}")
    print(f"Matches: {generated_hash == '26c6f9703c762620476c83cea0122d31c7ab15b9a949aaae1cb933dcfc832ed0'}")
    print()