# Word Summary

def word_histogram(paragraph):
    
    paragraph = (paragraph.lower()).split() 
    uniqueWords = list(set(
        [word for word in paragraph if word.isalnum()]
        ))
    wordCount = {key: paragraph.count(key) for key in uniqueWords}

    return wordCount

# Test it out below by changing the paragraph argument.

# print(word_histogram("""
#     To be or not to be, that is the question.
#     Whether 'tis nobler in the mind...
#     """))