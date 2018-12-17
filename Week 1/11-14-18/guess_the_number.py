# Guess a Number Game
# Steps 1-4 w/bonus

from random import randint
ask = 'Y'

while ask == 'Y':
    chances = 5
    number = randint(1, 10)
    guess = int(input("I am thinking of a number between 1 and 10.  You have 5 guesses.  Guess the number: "))
    while guess != number and chances > 0:
        chances -= 1
        if chances > 0:
            if guess > number:
                guess = int(input(f"{guess} is too high.  You have {chances} chances left.  Try again: "))
            elif guess < number:
                guess = int(input(f"{guess} is too low.  You have {chances} chances left.  Try again: "))

    if guess == number:
        ask = (input(f"Yes! {number} is the number!  Enter Y to play again.  Anything else to quit: ")).upper()
    else:
        ask = (input(f"Sorry, the number is {number}.  Enter Y to play again.  Anything else to quit: ")).upper()

    # if guess == number:
    #     while ask == 'Y':
    #         ask = (input(f"Yes! {number} is the number!  Play again? (Y/N): ")).upper()
    #         if ask == 'Y' or ask == 'N':
    #             break
    #         else:
    #             while ask != 'Y' and ask != 'N':
    #                 ask = (input(f"I didn't understand.  Play again? (Y/N): ")).upper()
    #         if ask == 'Y' or ask == 'N':
    #             break
    # else:
    #     while ask == 'Y':
    #         ask = (input(f"Sorry, the number is {number}.  Play again? (Y/N): ")).upper()
    #         if ask == 'Y' or ask == 'N':
    #             break
    #         else:
    #             while ask != 'Y' and ask != 'N':
    #                 ask = (input(f"I didn't understand.  Play again? (Y/N): ")).upper()
    #         if ask == 'Y' or ask == 'N':
    #             break