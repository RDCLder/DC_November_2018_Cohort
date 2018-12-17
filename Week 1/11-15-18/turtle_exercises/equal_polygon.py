# Exercise 1

# Below is a universal equilateral, concave polygon generator.
# All polygons MUST have a total external angle of 360.
# All internal angles and external angles are supplementary.
# A polygon has an internal angle for each intersection of two sides.
# We can calculate what each angle should be based on how many sides a polygon has.
# This only works for polygons with equilateral sides with no complex concavity.

from turtle import *

sides = int(input("Enter the number of sides: "))
innerAngle = (360 / sides)

up()
forward(50)
left(90)
forward(50)
left(90)
down()

for i in range(sides):
    forward(100)
    left(innerAngle)

mainloop()