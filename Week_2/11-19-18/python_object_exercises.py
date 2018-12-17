# Python Object Exercises
#-----------------------------------------------------------------------------------------#

# 1. Basics

class Person:
    
    total_greetings = 0

    def __init__(self, name, email, phone, friends=None, greeting_count=None, greeted=None): 
        self.name = name
        self.email = email
        self.phone = phone
        
        if friends is None:
            friends = []
        self.friends = friends

        if greeting_count is None:
            greeting_count = 0
        self.greeting_count = greeting_count

        if greeted is None:
            greeted = []
        self.greeted = greeted

    def __str__(self):
        return f"Hello, my name is {self.name}!"

    def greet(self, other_person): 
        self.greeting_count += 1
        Person.total_greetings += 1

        if other_person.name not in self.greeted:
            self.greeted.append(other_person.name)

        print(f"Hello {other_person.name}, I am {self.name}!")

    def num_unique_people_greeted(self):
        if len(self.greeted) == 0:
            print(f"{self.name} hasn't greeted anyone yet.")
        elif len(self.greeted) == 1:
            print(f"{self.name} has greeted 1 person.")
        elif len(self.greeted) > 1:
            print(f"{self.name} has greeted {len(self.greeted)} different people.")

    def print_contact_info(self):
        print(f"{self.name}'s Email: {self.email}\n{self.name}'s Phone Number: {self.phone}")
    
    def add_friend(self, friend):
        self.friends.append(friend)
    
    def num_friends(self):
        print(f"{self.name} has {len(self.friends)} friends.")

# 1.1

sonny = Person("Sonny", "sonny@hotmail.com", "483-485-4948")

# 1.2

jordan = Person("Jordan", "jordan@aol.com", "495-586-3456")

# 1.3

sonny.greet(jordan)

# 1.4

jordan.greet(sonny)

# 1.5

print(f"Sonny's Email: {sonny.email} \nSonny's Phone Number: {sonny.phone}")

# 1.6

print(f"Jordan's Email: {jordan.email} \nJordan's Phone Number: {jordan.phone}")

#-----------------------------------------------------------------------------------------#

# 2. Make Your Own Class

class Vehicle:

    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year
    
# Add a method

    def print_info(self):
        print(f"Make: {self.make}\nModel: {self.model}\nYear: {self.year}")

# Add a method 2

sonny.print_contact_info()

# Add an instance variable (attribute)

sonny.friends.append(jordan)
jordan.friends.append(sonny)
print(f"{jordan.name} has {len(jordan.friends)} friend(s).")
print(f"{sonny.name} has {len(sonny.friends)} friend(s).")

# Add a add_friend method

john = Person("John", "john@gmail.com", "800-800-8000")
sonny.add_friend(sonny)
print(f"{sonny.name} now has {len(sonny.friends)} friends.")

# Add a num_friends method

sonny.num_friends()
jordan.num_friends()

# Count number of greetings

sonny.greet(john)
sonny.greeting_count

# __str__

print(sonny)

#-----------------------------------------------------------------------------------------#

# Bonus Challenge

sonny.num_unique_people_greeted()
print(sonny.greeted)