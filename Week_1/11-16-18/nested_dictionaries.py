# Exercise 2: Nested Dictionaries

ramit = { 
  'name': 'Ramit', 
  'email': 'ramit@gmail.com', 
  'interests': ['movies', 'tennis'], 
  'friends': [ 
     { 
       'name': 'Jasmine', 
       'email': 'jasmine@yahoo.com', 
       'interests': ['photography', 'tennis']
     }, 
     { 
        'name': 'Jan', 
        'email': 'jan@hotmail.com', 
        'interests': ['movies', 'tv'] 
     } 
    ] 
}

# 1.

ramitEmail = ramit["email"]
print(f"1. Ramit's email: {ramitEmail}")

# 2.

ramitInterests = ramit["interests"]
print(f"2. Ramit's first interest: {ramitInterests[0]}")

# 3.

jasmineEmail = ramit["friends"][0]["email"]
print(f"3. Jasmine's email: {jasmineEmail}")

# 4.

jasmineInterests = ramit["friends"][0]["interests"]
print(f"4. Jasmine's second interest: {jasmineInterests[1]}")