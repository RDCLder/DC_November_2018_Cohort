# 8. Tip Calculator 2

bill = int(input("Enter the total bill amount: "))
service = input("How was the level of service (good, fair or bad)? ")
split = int(input("Split how many ways? "))

if service == "good":
    print(f"""
    Tip amount: {(bill * 0.2):0.2f}
    Total amount: {(bill + bill * 0.2):0.2f} 
    Amount per person: {((bill + bill * 0.2)/split):0.2f}""")
elif service == "fair":
    print(f"""
    Tip amount: {(bill * 0.15):0.2f}
    Total amount: {(bill + bill * 0.15):0.2f} 
    Amount per person: {((bill + bill * 0.15)/split):0.2f}""")
elif service == "bad":
    print(f"""
    Tip amount: {(bill * 0.1):0.2f}
    Total amount: {(bill + bill * 0.1):0.2f} 
    Amount per person: {((bill + bill * 0.1)/split):0.2f}\n""")