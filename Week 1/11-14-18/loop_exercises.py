# 1. 1 to 10

for i in range(1, 11):
    print(i, end = " ")
print("")

# 2. n to m

def customRange(a, b):
    for i in range(a, b + 1):
        print(i, end = " ")

customRange(2, 8)
print("")

# 3. Odd Numbers

for i in range(1, 10, 2):
    print(i, end = " ")
print("")

# 4. Print a Square

for i in range(5):
    print('*' * 5)
print("")

# 5. Print a Square II

n = int(input("Enter the dimensions of the square (enter an integer): "))
n = abs(int(round(n)))
for i in range(n):
    print('*' * n)
print("")

# 6. Print a Box

def printBox(width, height):
    return ("*" * width + "\n") + ("*" + " " * (width - 2) + "*" + "\n") * (height - 2) + ("*" * width)

# Test out this function by changing the width and height argument below:

print("A 7 x 5 Box:")
print(printBox(7, 5))

# 7. Print a Triangle

print("   *   \n  ***  \n ***** \n*******")

# 8. Print a Triangle II

height = int(input("Enter a height: "))

for i in range(height):
    print(
        (height - i - 1) * " " + 
        ("*" * (2 * i + 1)) + 
        (height - i - 1) * " "
        )

# 9. Multiplication Table

for i in range(1, 11):
    for j in range(1, 11):
        print(f"{i} x {j} = {i * j}")

# Bonus: Print a Banner

banner = input("Enter banner text: ")
bannerWrap = "*" * len(banner) + "****"
print(f"{bannerWrap}\n* {banner} *\n{bannerWrap}")

# Bonus: Triangle Numbers

for i in range(1, 101):
    print(f"{i}. {i * (i + 1) / 2}")

# Bonus: Factor a Number

# Note:  The function below is only practical for N < 1000.

def factorNumber(n):
    
    factors = []

    for i in range(1, n):
        if n % i == 0:
            factors.append(i)
    
    return factors

# Test it below my changing the parameter n to any number.

print(factorNumber(n))

# A brute force approach is inefficient for large numbers.
# A factorization problem needs to be optimized for time-complexity or "Big-O."
# This will often come from implementing mathematical algorithms.
# The most efficient algorithm I've found is linked below:
# https://maths-people.anu.edu.au/~brent/pd/rpb051i.pdf