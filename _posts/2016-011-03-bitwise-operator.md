--- 
layout: post
title: Bitwise AND (&) Operator
author: uzubair
tags: [&operator, bitwise operator, even, odd]
---

#### Check Even or Odd number
The bitwise AND (&) operator compares each bit of its first operand to the corresponding bit of the second operand. If both bits are 1’s, the corresponding bit of the result is set to 1. Otherwise, it sets the corresponding result bit to 0.

Let’s see the logic switch for &:
bitwise_and_operator
Example:

2 & 1 evaluates to 0. Let’s see the operands represented as 8 bit binary numbers:

Bit pattern of 2 is: 00000010
Bit pattern of 1 is: 00000001

So, in order for us to see if the number is even, we can write (Java):
```java
public boolean isEven(final int number) {
     int result = number & 1;

     return (result == 0) ? true : false;
}
```
And, same way, we can see if the number is odd:
```java
public boolean isOdd(final int number) {
     int result = number & 1;

     return (result == 1) ? true : false;
}
```

This is way more optimized as compare to % modulus operation.
