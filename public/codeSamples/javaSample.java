// FizzBuzz class in Java
public class FizzBuzz {
    // Main method where the program starts
    public static void main(String[] args) {
        // Loop from 1 to 100
        for (int i = 1; i <= 100; i++) {
            // If 'i' is divisible by both 3 and 5, print "FizzBuzz"
            if (i % 3 == 0 && i % 5 == 0) {
                System.out.println("FizzBuzz");
            }
            // If 'i' is divisible by only 3, print "Fizz"
            else if (i % 3 == 0) {
                System.out.println("Fizz");
            }
            // If 'i' is divisible by only 5, print "Buzz"
            else if (i % 5 == 0) {
                System.out.println("Buzz");
            }
            // If 'i' is not divisible by either 3 or 5, print the number
            else {
                System.out.println(i);
            }
        }
    }
}
