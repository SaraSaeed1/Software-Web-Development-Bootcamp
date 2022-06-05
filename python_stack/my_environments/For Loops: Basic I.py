
print("Basic - Print all integers from 0 to 150.")
for x in range (151):
    print (x)

print()
print ("Multiples of Five - Print all the multiples of 5 from 5 to 1,000")
for mul in range (5 , 1001, 5):
    mul=mul*mul
print (mul)


print()
print("Counting, the Dojo Way - Print integers 1 to 100. If divisible by 5, print 'Coding' instead. If divisible by 10, print 'Coding Dojo'.")
for integers in range (1 , 101):
    if integers %5==0  :
        print ("Coding")
    if integers %10==0 :
        print ("Coding Dojo")


print()
print("Whoa. That Sucker's Huge - Add odd integers from 0 to 500,000, and print the final sum.")
for sumOdd in range (500000):
    if sumOdd%2 !=0:
        sumOdd = sumOdd+ sumOdd
print (sumOdd)


print()
print("Countdown by Fours - Print positive numbers starting at 2018, counting down by fours.")
for Fours in range (2018, 0, -4):
    print (Fours)


print()
print("Flexible Counter - Set three variables: lowNum, highNum, mult. Starting at lowNum and going through highNum, print only the integers that are a multiple of mult. For example, if lowNum=2, highNum=9, and mult=3, the loop should print 3, 6, 9 (on successive lines)")

lowNum =2
highNum =9
mult =3
for Flexible in range(lowNum , highNum +1):
    if Flexible % mult == 0:
        print(Flexible)
