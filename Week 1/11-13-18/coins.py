# 10. How many coins?

coins = 0
response = input(f"You have {coins} coins. Do you want another (yes/no)? ")

while response == 'yes':
    coins += 1
    response = input(f"You have {coins} coins. Do you want another (yes/no)? ")

print("Goodbye")