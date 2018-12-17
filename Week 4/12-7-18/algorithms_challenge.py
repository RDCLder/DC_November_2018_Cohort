# Challenge 1

def collatzSequence(n):

    sequence = []

    if n <= 0:
        return n
    else:
        while n != 1:
            if n % 2 == 0:
                n = n // 2
                sequence.append(n)
            else:
                n = n * 3 + 1
                sequence.append(n)
        return sequence

# print(collatzSequence(37))

# ------------------------------------------------------------------------------------

# Challenge 2

def largestPalindrome(n1, n2):

    limit1 = range(1, n1 + 1)
    limit2 = range(1, n2 + 1)
    palindromes = [i * j for i in limit1 for j in limit2 if str(i * j) == str(i * j)[::-1]]

    return max(palindromes)

# print(largestPalindrome(999, 999))

# ------------------------------------------------------------------------------------

# Challenge 3

def smallestDivisible(n):

    arr = [i for i in range(1, n + 1)]
    limit = 1
    for num in arr:
        limit = limit * num
    
    for i in range(n, limit + 1):
        check = True
        for num in arr:
            if i % num != 0:
                check = False
                break
        
        if check:
            return i
            
# print(smallestDivisible(20))

check_list = [i for i in range(1, 21)]

def find_solution(step):
    for num in range(step, 999999999, step):
        if all(num % n == 0 for n in check_list):
            return num
    return None

print(find_solution(2520))

# ------------------------------------------------------------------------------------

# Challenge 4

