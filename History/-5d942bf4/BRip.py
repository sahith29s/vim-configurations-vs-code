# arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
# arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,0]

# emptyarry = []
# for i in arr:
#     emptyarry.append(str(i))

# emptyarry = "".join(emptyarry)
# print(emptyarry)
# print(emptyarry.count("1"))

# for i in arrNum:
#     print(f"{i} : {emptyarry.count(str(i))}")

import pyautogui as py
import time as t


chuitye
bcOrWot
matchlc
kc
chuitye
bcOrWot
matchlc
kc

abusiveWords = ["chuitye" , "bcOrWot" , "mc"  , "lc" , "kc" ]
t.sleep(3)
k = 0
for i in range(10):
    if(k > len(abusiveWords) -1 ) : k = 0
    word = abusiveWords[k]
    py.typewrite(f"{word}")
    py.press("enter")
    k =  k +1


