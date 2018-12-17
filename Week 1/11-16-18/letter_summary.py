# Letter Summary

from collections import Counter

def letter_histogram(word):
    return Counter(word)

# Test it out below by changing the word argument.

print(letter_histogram("hippopotomonstrosesquippedaliophobia"))

# Doing it manually:

def my_letter_histogram(word):
    
    uniqueLetters = list(set(
        [letter for letter in word if letter in 'abcdefghijklmnopqrstuvwxyz']))
    letterCount = {key: word.count(key) for key in uniqueLetters}

    return letterCount

# Test it out below by changing the word argument.

print(my_letter_histogram("hippopotomonstrosesquippedaliophobia"))

# Note: Dictionaries are inherently unordered
# The order in which the letter counts appear will be different each time.