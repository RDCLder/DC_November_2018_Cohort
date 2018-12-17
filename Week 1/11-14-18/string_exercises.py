# Initialize

myString = "\nthis is a string."
print(myString)

# 1. Uppercase a myString

myStringUpper = myString.upper()
print("\nUppercase: ", myStringUpper)

# 2. Capitalize a myString

myStringCapital = (myString[0]).upper() + myString[1::]
print("\nCapitalized: ", myStringCapital)

# 3. Reverse a myString

myStringReverse = myString[::-1]
print("\nReversed: ", myStringReverse)

# 4. Leetspeak

sentence = 'I am a leet super hacker god.'
print(sentence)
leetspeak = (((((((sentence.lower()).replace('a', '4')
    ).replace('e', '3')
    ).replace('g', '6')
    ).replace('i', '1')
    ).replace('o', '0')
    ).replace('s', '5')
    ).replace('t', '7')
print('\nLeetspeak: ', leetspeak)

# 5. Long-long Vowels

longVowels = (((((myString.replace('a', 'aaaaa')
    ).replace('e', 'eeeee')
    ).replace('i', 'iiiii')
    ).replace('o', 'ooooo')
    ).replace('u', 'uuuuu')
    ).replace('y', 'yyyyy')
print('\nLong-long Vowels: ', longVowels)

# 6. Caeser Cipher

import string

def caeser_decoder(message, shift):

    alphabet = string.ascii_lowercase
    deshift_alphabet = alphabet[26 - shift:] + alphabet[:26 - shift]
    table = str.maketrans(alphabet, deshift_alphabet)
    
    return message.translate(table)

print(caeser_decoder("\nlbh zhfg hayrnea jung lbh unir yrnearq\n", 13))