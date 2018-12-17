# 1. Hello

def sayHello(name):
    return f"Hello, {name}!"

# 2. y = x + 1

import matplotlib.pyplot as plt

def f1(x):
    return x + 1

x1 = list(range(-3, 4))
y1 = [f1(x) for x in x1] 
plot1 = plt.plot(x1, y1)
plt.title('X + 1')
plt.show(plot1)

# 3. Square of x

def f2(x):
     return x ** 2

x2 = list(range(-100, 101))
y2 = [f2(x) for x in x2]
plot2 = plt.plot(x2, y2)
plt.title('Square of x')
plt.show(plot2)

# 4. Odd or Even

def f3(x):
     if x % 2 == 0:
          return -1
     elif x % 2 != 0:
          return 1

x3 = list(range(-5, 6))
y3 = [f3(x) for x in x3]
plot3 = plt.bar(x3, y3)
plt.title('Odd vs. Even')
plt.show(plot3)

# 5. Sine

from math import sin

def f4(x):
     return sin(x)

x4 = list(range(-5, 6))
y4 = [f4(x) for x in x4]
plot4 = plt.plot(x4, y4)
plt.title('Sine Transformation 1')
plt.show(plot4)

# 6. Sine 2

from numpy import arange

x5 = arange(-5, 5.1, 0.1)
y5 = [f4(x) for x in x5]
plot5 = plt.plot(x5, y5)
plt.title('Sine Transformation 2')
plt.show(plot5)

# 7. Degree Conversion

def c2f(celsius):
     return celsius * 1.8 + 32

ctemps = arange(-10, 40, 0.5)
ftemps = [c2f(celsius) for celsius in ctemps]
plot6 = plt.plot(ctemps, ftemps)
plt.title('Fahrenheit vs. Celsius')
plt.xlabel('Celsius')
plt.ylabel('Fahrenheit')
plt.show(plot6)

# 8. Play Again?

def play_again():
     ask = input('Do you want to play again (Y/N): ')
     if ask == 'Y':
          return True

print(play_again())

# 9. Play Again?  Again

def play_again_again():
     
     ask = ' '

     while ask != 'Y' or ask != 'N':
          ask = input('Do you want to play again (Y/N): ')
          if ask == 'Y':
               return True
          elif ask == 'N':
               return False
          else:
               print('Invalid input.')

print(play_again_again())