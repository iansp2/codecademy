# Takes a number x and outputs x
identity = lambda x: x
print(identity(1))

# Takes a number x and outputs x + 1
addition = lambda x: x + 1
print(addition(1))

# Takes two inputs and outputs their sum, currying two lambda functions
curry = lambda x: lambda y: x + y
curry_step_1 = curry(1)
curry_step_2 = curry_step_1(2)
print(curry_step_2)

# Encoding True, False, and IfThen to test boolean logic
true = lambda x: lambda y: x
false = lambda x: lambda y: y
if_then = lambda b: lambda x: lambda y: b(x)(y)

# If b then M, else N. With input b=True, this should evaluate to M.
# With input b=False, this should evaluate to N.
M = "This is M"
N = "This is N"

result_true = if_then(true)(M)(N)
result_false = if_then(false)(M)(N)

print(result_true)
print(result_false)