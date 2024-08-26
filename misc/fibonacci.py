def fibonacci(n):
    """Returns nth element of fibonacci sequence using recursion"""
    if n <= 1:
        return n
    
    return fibonacci(n-1) + fibonacci(n-2)

n = int(input("n = "))
print(fibonacci(n))