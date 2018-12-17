# Exercise 3

from turtle import *

def equalPolygon(size, fill=0, color=0):

    if sides > 0:
        innerAngle = (360 / int(sides))

        up()
        forward(50)
        left(90)
        forward(50)
        left(90)
        down()

        for i in range(sides):
            forward(size)
            left(innerAngle)

        if fill:
            if color == 0:
                pencolor

        return mainloop()
    else:
        return "That's not a valid input."

def specialShape():
    
    shape = 1

    while shape:
        shape = (input("Enter a shape.  Enter 'O' for options.  Enter 'Q' to quit: ")).upper()
        if shape == 'STAR' or shape == '1':

            up()
            forward(50)
            left(90)
            forward(50)
            left(90)
            down()

            for i in range(5):
                forward(100)
                left(126)
                forward(100)
                right(54)
            return mainloop()

        elif shape == 'CIRCLE' or shape == '2':

            up()
            forward(50)
            left(90)
            forward(50)
            left(90)
            down()

            circle(100)
            return mainloop()

        elif shape == 'O':
            print("The options are:\n1. Star\n2. Circle")
        elif shape == 'Q':
            break
        else:
            print("That's not a valid option.")