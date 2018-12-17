# Exercise 0

from turtle import *

## Draw a Square

forward(100)
right(90)
forward(100)
right(90)
forward(100)
right(90)
forward(100)
mainloop()

## Draw a square centered on the screen

up()
forward(50)
left(90)
forward(50)
left(90)
down()

forward(100)
left(90)
forward(100)
left(90)
forward(100)
left(90)
forward(100)
mainloop()

## Draw a circle on an orange background

pencolor('orange')
width(10)
circle(180)

## Draw a Star

for i in range(5):
    forward(100)
    right(144)

mainloop()