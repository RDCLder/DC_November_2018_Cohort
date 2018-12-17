# Write a Phone Book App

# Initialize

menu = 0
entries = {
    "Ray": "832-660-7621",
    "Test": "000-000-0000"
}

# Main

while menu != '5':
    
    menu = input("""
Electronic Phone Book
=====================
1. Look up an entry
2. Add a new entry
3. Change/delete an entry
4. List all entries
5. Quit

Enter an option (1-5):  """)

    if menu == '1':
        name = input("Name: ")
        if name in entries:
            print(f"Entry found for {name}: {entries[name]}")
        else:
            print(f"{name} not found.  Returning to menu.")

    elif menu == '2':
        name = input("Name: ")
        if name not in entries:
            number = input("Phone Number: ")
            print(f"Entry stored for {name}.")
        else:
            print(f"{name} is already stored as: {entries[name]}")

    elif menu == '3':
        ask = input("""
1. Change an entry
2. Delete an entry

Enter an option (1 or 2): """)
        
        if ask == '1':
            name = input("Name: ")
            if name in entries:
                number = input("Phone Number: ")
                entries[name] = number
                print(f"\n{name}'s number changed to: {entries[name]}")
            else:
                print(f"\n{name} not found.  Returning to menu.")
        elif ask == '2':
            name = input("Name: ")
            if name in entries:
                entries.pop(name)
                print(f"\nDeleted entry for {name}.")
            else:
                print(f"\n{name} not found.  Returning to menu.")
        else:
            print("\nInvalid option.  Returning to menu.")

    elif menu == '4':
        for item in entries.items():
            print(f"{item[0]}: {item[1]}")

    elif menu == '5':
        print("\nGoodbye.")
    else:
        print("\nPlease enter a valid option.")
