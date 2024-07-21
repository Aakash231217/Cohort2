import hashlib

def sha256_hash(input_string):
    if not isinstance(input_string, str):
        raise ValueError("input is invalid type")
    # Encode the string to bytes, then compute the hash
    sha256 = hashlib.sha256()
    sha256.update(input_string.encode('utf-8'))
    # Return the hexadecimal representation of the hash
    return sha256.hexdigest()

# Example usage
input_string = "routeInfoPayload"  # Replace this with the actual value you get after reverse engineering the API
print(f"SHA-256 hash: {sha256_hash(input_string)}")
