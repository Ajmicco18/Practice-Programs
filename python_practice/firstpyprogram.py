a = "The big brown dog jumped over the blue moon"
b = 1000
c = 2000
true = "{} is bigger than {}"
false = "{} is not bigger than {}"

if "black" in a:
    print("The word black is in " + a)
else:
    print("The word black is not in a")

if c > b:
    print(true.format(c, b))
else:
    print(false.format(c, b))

myCars = ("Honda", "Chevy", "Ford")
print(myCars)
myList = list(myCars)
myList.append("BMW")
myList.append("Mercedes")
myCars = tuple(myList)
print(myCars)

fruits = ("apple", "pear", "strawberry")
myTuple = 2*fruits
print(myTuple)

x = 10
for y in range(10):
    x *= 10
    print(x)
    if x > 100000:
        print("x is now greater than 100000")
        break
