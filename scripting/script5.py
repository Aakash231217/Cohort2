def joe_sha256(input_string):
    "Joe's SHA256 implementation"

    # Create a binary version of the input string
    binary_string = create_binary(input_string)

    # Append '1' bit to the end as per the SHA256 specification
    appended_1_bit_string = append_bit_1(binary_string)

    # Append 'k' bits to allow for len(string) % 512 == 448
    appended_k_string = append_k_bit(appended_1_bit_string)

    # Append length of message (in bits) as a 64-bit binary number
    length_of_message = append_length_of_message(len(binary_string))

    # Create final message
    final_message = appended_k_string + length_of_message

    print(len(final_message))  # This should print 512

    return final_message  # Just for testing.


def create_binary(input_string):
    "Takes a string and outputs its binary form"
    return ''.join(format(ord(x), '08b') for x in input_string)


def append_bit_1(input_string):
    "Appends the bit 1 to the binary form"
    return input_string + '1'


def append_k_bit(input_string):
    "Makes sure the length of input will become X % 512 == 448"
    while len(input_string) % 512 != 448:
        input_string += '0'
    return input_string


def append_length_of_message(original_length):
    "Appends the length of the original message as a 64-bit binary number"
    length_binary = format(original_length, '064b')
    return length_binary


# Test the function with a sample input
input_string = "Hello World"
final_message = joe_sha256(input_string)
print(f"Final padded message: {final_message}")
