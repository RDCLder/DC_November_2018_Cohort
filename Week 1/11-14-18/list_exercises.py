# Initialize

numbers = [1, 1, 2, 3, 5, 8, 13]
print("The numbers are: ", numbers)

# 1. Sum the Numbers

sum = 0
for n in numbers:
    sum += n
print("Sum: ", sum)

# 2. Largest Number

print("Largest Number: ", max(numbers))

# 3. Smallest Number

print("Smallest Number: ", min(numbers))

# 4. Even Numbers

print("Even Numbers: ", end = "")
for n in numbers:
    if n % 2 == 0:
        print(n, end = " ")

# 5. Positive Numbers

print("\nPositive Numbers: ", end = "")
for n in numbers:
    if n > 0:
        print(n, end = " ")

# 6. Positive Numbers II

print("\nList of Positive Numbers: ", [n for n in numbers if n > 0])

# 7. Multiply a List

print("Multiply by 2: ", [n * 2 for n in numbers])

# 8. Multiply Vectors

list1 = [2, 4, 6]
list2 = [3, 5, 7]

print("List 1: ", list1)
print("List 2: ", list2)
print("Vector Multiplication: ", [list1[i] * list2[i] for i in range(len(list1))])

# 9. Matrix Addition

simpleMatrix = [[2, -2], [5, 3]]
addMatrix = [simpleMatrix[0][i] + simpleMatrix[1][i] for i in range(len(simpleMatrix[0]))]

print("Matrix: ", simpleMatrix)
print("Matrix Addition: ", addMatrix)

# 10. Matrix Addition II

# Assuming that the matrices are formatted as [[matrix1], [matrix2]]:

def matrixAddition(matrix):
    return [matrix[0][i] + matrix[1][i] 
        for i in range(len(matrix[0])) if len(matrix[0]) == len(matrix[1])]

# Test it out by changing the argument below to a matrix of your choice.

print(matrixAddition([[1, 2, 3], [4, 5, 6]]))

# 11. De-dup

duplicateList = ['a', 'b', 'b', 'c', 'c', 'c', 1, 2, 2, 3, 3, 3]

print("The List: ", duplicateList)

for item in duplicateList:
    while duplicateList.count(item) > 1:
        duplicateList.remove(item)

print("Without Duplicates: ", duplicateList)

# Bonus: Matrix Multiplication

matrix1 = [[25, 41], [37, 54]]
matrix2 = [[42, 63], [52, 71]]

# Matrix structure is as follows:
# The first list will correspond to the first row of a matrix.
# The second list will correspond to the second row.
# Therefore, the two matrices will look like this:

# [25 41]       [42 63]
# [37 54]       [52 71]

multiMatrix = [
    [
        matrix1[0][0] * matrix2[0][0] + matrix1[0][1] * matrix2[1][0], 
        matrix1[0][0] * matrix2[0][1] + matrix1[0][1] * matrix2[1][1]
    ], 
    [
        matrix1[1][0] * matrix2[0][0] + matrix1[1][1] * matrix2[1][0], 
        matrix1[1][0] * matrix2[0][1] + matrix1[1][0] * matrix2[1][1]
    ]
]

print("Matrix 1: ", matrix1)
print("Matrix 2: ", matrix2)
print("Matrix Multiplication: ", multiMatrix)