arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,0]

emptyarry = []
for i in arr:
    emptyarry.append(str(i))

emptyarry = "".join(emptyarry)
print(emptyarry)
for i in range(10):
    print(f"{arrNum[i]} : {emptyarry.count(str(i))}")
