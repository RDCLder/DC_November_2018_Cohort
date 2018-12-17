results = [[input(), float(input())] for i in range(int(input()))]
secondLowest = sorted(list(set([score for name, score in results])))[::-1][1]
names = []

for r in results:
    if r[1] == secondLowest:
        names.append(r[0])

for n in sorted(names):
    print(n)