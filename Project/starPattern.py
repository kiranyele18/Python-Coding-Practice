def starPattern():
    n = int(input("Enter Number : "))
    
    for i in range(n):
        for j in range(i+1):
            print("*",end=" ")
        print()
starPattern()