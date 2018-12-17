# 2. Special Pythagorean Triplet

def pythagoreanTriplet(n):
    
    # aList = []
    # bList = []
    limit1 = n // 3 + 1
    limit2 = n // 2 + 1

    for a in range(3, limit1):
        for b in range(a + 1, limit2):
            # for c in range(b, n // 2):
            c = n - a - b
            if a ** 2 + b ** 2 == c ** 2:
                return f"Triplets: {a} {b} {c}\nProduct: {a * b * c}"
                # aList.append(a)
                # bList.append(b)
    
    # return [aList, bList]

print(pythagoreanTriplet(1000))

# 3. Find the single different character between two strings

def differentCharacter(str1, str2):
    for char in str2:
        if char not in str1:
            return f"Difference: {char}"

print(differentCharacter("aaabbcdd", "abdkbacad"))