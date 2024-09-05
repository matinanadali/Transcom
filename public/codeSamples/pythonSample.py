def fizzbuzz(n):
    # Loop through numbers from 1 to n
    for i in range(1, n + 1):
        # Check if the number is divisible by both 3 and 5
        if i % 3 == 0 and i % 5 == 0:
            print("FizzBuzz")
        # Check if the number is divisible by 3 only
        elif i % 3 == 0:
            print("Fizz")
        # Check if the number is divisible by 5 only
        elif i % 5 == 0:
            print("Buzz")
        # If the number is not divisible by 3 or 5, just print the number
        else:
            print(i)

# Call the fizzbuzz function with a specific value for n
fizzbuzz(100)