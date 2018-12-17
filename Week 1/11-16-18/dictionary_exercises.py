# Exercise 1

phonebook_dict = { 
  'Alice': '703-493-1834', 
  'Bob': '857-384-1234', 
  'Elizabeth': '484-584-2923'
}

# 1. Print Elizabeth's phone number.

elizabeth = phonebook_dict["Elizabeth"]
print(f"1. Elizabeth's Number: {elizabeth}")

# 2. Add a entry to the dictionary: Kareem's number is 938-489-1234.

phonebook_dict.update({"Kareem": "938-489-1234"})
kareem = phonebook_dict["Kareem"]
print(f"2. Kareem's Number: {kareem}")

# 3. Delete Alice's phone entry.

phonebook_dict.pop("Alice")

# 4. Change Bob's phone number to '968-345-2345'.

phonebook_dict["Bob"] = '968-345-2345'
bob = phonebook_dict["Bob"]
print(f"4. Bob's Number: {bob}")

# 5. Print all the phone entries.

print("5.")
for key, value in phonebook_dict.items():
    print(f"{key}'s number: {value}")