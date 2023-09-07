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
    print(true.format(c,b))
else: 
    print(false.format(c,b))