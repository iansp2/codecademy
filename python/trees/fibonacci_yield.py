import time

def fibonacci_yield():
    previous, current = 0, 1
    while True:
        yield previous
        previous, current = current, previous + current

fibonacci_gen = fibonacci_yield()

while True:
    print(next(fibonacci_gen))
    time.sleep(0.01)