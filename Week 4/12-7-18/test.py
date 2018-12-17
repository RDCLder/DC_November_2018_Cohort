
# n1 = 999
# n2 = 999

# limit1 = range(1, n1 + 1)
# limit2 = range(1, n2 + 1)

# palindromes = [i * j for i in limit1 for j in limit2 if str(i * j) == str(i * j)[::-1]]

# print(max(palindromes))

from functools import reduce

def gcd(a, b):
    while b:      
        a, b = b, a % b
    return a

def lcm(a, b):
    return a * b // gcd(a, b)

def lcmm(*args):
    return reduce(lcm, args)

n = 20
arr = [i for i in range(1, n + 1)]

print(lcmm(arr))

# Need to find a way to make the function accept list arguments instead of just *args