# 7. Tip Calculator

bill = int(input("Enter the total bill amount: "))
service = input("How was the level of service (good, fair or bad)? ")
if service == "good":
    print(f"Tip amount: {(bill * 0.2):0.2f} \nTotal amount: {(bill + bill * 0.2):0.2f}")
elif service == "fair":
    print(f"Tip amount: {(bill * 0.15):0.2f} \nTotal amount: {(bill + bill * 0.15):0.2f}")
elif service == "bad":
    print(f"Tip amount: {(bill * 0.1):0.2f} \nTotal amount: {(bill + bill * 0.1):0.2f}")