arr = [1, 2, 3, 4, 5, 5, 6]
newArr = []

for num in arr:
    if num not in newArr:
        newArr.append(num)

print(newArr)