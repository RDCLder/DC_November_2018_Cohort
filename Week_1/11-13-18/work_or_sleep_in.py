# 5. Work or Sleep In?

day = int(input("Enter the day of the week (0 to 6): "))

if 1 <= day <= 5:
    print("Go to work!")
elif day == 0 or day == 6:
    print("Sleep in.")