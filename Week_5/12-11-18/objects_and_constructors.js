// JavaScript Objects and Construtors

// --------------------------------------------------------------------------------------------------

function Person(name, email, phone) { 
    this.name = name; 
    this.email = email; 
    this.phone = phone; 
} 

Person.prototype.greet = function(other) { 
    return 'Hello ' + other.name + ', I am ' + this.name + '!';
};

Person.prototype.contact = function() {
    return this.name + "'s phone number: " + this.phone + "\n" + this.name + "'s email: " + this.email;
};

// 1-6

sonny = new Person("Sonny", "sonny@hotmail.com", '483-485-4948');
jordan = new Person("Jordan", "jordan@aol.com", '495-586-3456');

// console.log(sonny.greet(jordan));
// console.log(jordan.greet(sonny));
// console.log(sonny.contact());
// console.log(jordan.contact());

// --------------------------------------------------------------------------------------------------

// Card Constructor

function Card(point, suit, path) {
    this.point = point;
    this.suit = suit;
    this.path = path;
}

// var clubAce = new Card(11, "club");
// console.log(clubAce);

// getImageUrl()

Card.prototype.getImageUrl = function() {
    return this.path;
};

// var clubAce = new Card(11, "club", "images/AC.jpg");
// console.log(clubAce.getImageUrl());

// Hand Constructor

function Hand() {
    this.cardArr = [];
}

Hand.prototype.addCard = function(card) {
    this.cardArr.push(card)
}

Hand.prototype.getPoints = function() {
    var total = 0;
    for (n in this.cardArr) {
        total += this.cardArr[n].point;
    }
    return total;
}

// var myHand = new Hand();
// myHand.addCard(new Card(5, 'diamonds'));
// myHand.addCard(new Card(10, 'spades'));
// console.log(myHand.getPoints());

// Deck Constructor

function Deck() {
    this.cardArr = [
        new Card(11, "Clubs", "images/AC.jpg"),
        new Card(2, "Clubs", "images/2C.jpg"),
        new Card(3, "Clubs", "images/3C.jpg"),
        new Card(4, "Clubs", "images/4C.jpg"),
        new Card(5, "Clubs", "images/5C.jpg"),
        new Card(6, "Clubs", "images/6C.jpg"),
        new Card(7, "Clubs", "images/7C.jpg"),
        new Card(8, "Clubs", "images/8C.jpg"),
        new Card(9, "Clubs", "images/9C.jpg"),
        new Card(10, "Clubs", "images/10C.jpg"),
        new Card(10, "Clubs", "images/JC.jpg"),
        new Card(10, "Clubs", "images/QC.jpg"),
        new Card(10, "Clubs", "images/KC.jpg"),
        
        new Card(11, "Spades", "images/AS.jpg"),
        new Card(2, "Spades", "images/2S.jpg"),
        new Card(3, "Spades", "images/3S.jpg"),
        new Card(4, "Spades", "images/4S.jpg"),
        new Card(5, "Spades", "images/5S.jpg"),
        new Card(6, "Spades", "images/6S.jpg"),
        new Card(7, "Spades", "images/7S.jpg"),
        new Card(8, "Spades", "images/8S.jpg"),
        new Card(9, "Spades", "images/9S.jpg"),
        new Card(10, "Spades", "images/10S.jpg"),
        new Card(10, "Spades", "images/JS.jpg"),
        new Card(10, "Spades", "images/QS.jpg"),
        new Card(10, "Spades", "images/KS.jpg"),

        new Card(11, "Diamonds", "images/AD.jpg"),
        new Card(2, "Diamonds", "images/2D.jpg"),
        new Card(3, "Diamonds", "images/3D.jpg"),
        new Card(4, "Diamonds", "images/4D.jpg"),
        new Card(5, "Diamonds", "images/5D.jpg"),
        new Card(6, "Diamonds", "images/6D.jpg"),
        new Card(7, "Diamonds", "images/7D.jpg"),
        new Card(8, "Diamonds", "images/8D.jpg"),
        new Card(9, "Diamonds", "images/9D.jpg"),
        new Card(10, "Diamonds", "images/10D.jpg"),
        new Card(10, "Diamonds", "images/JD.jpg"),
        new Card(10, "Diamonds", "images/QD.jpg"),
        new Card(10, "Diamonds", "images/KD.jpg"),

        new Card(11, "Hearts", "images/AH.jpg"),
        new Card(2, "Hearts", "images/2H.jpg"),
        new Card(3, "Hearts", "images/3H.jpg"),
        new Card(4, "Hearts", "images/4H.jpg"),
        new Card(5, "Hearts", "images/5H.jpg"),
        new Card(6, "Hearts", "images/6H.jpg"),
        new Card(7, "Hearts", "images/7H.jpg"),
        new Card(8, "Hearts", "images/8H.jpg"),
        new Card(9, "Hearts", "images/9H.jpg"),
        new Card(10, "Hearts", "images/10H.jpg"),
        new Card(10, "Hearts", "images/JH.jpg"),
        new Card(10, "Hearts", "images/QH.jpg"),
        new Card(10, "Hearts", "images/KH.jpg")
    ];
}

Deck.prototype.draw = function() {
    let randomIndex = Math.floor(Math.random() * this.cardArr.length);
    let cardDrawn = this.cardArr[randomIndex];
    this.cardArr.splice(randomIndex, 1);
    return cardDrawn;
}

Deck.prototype.numCardsLeft = function() {
    return this.cardArr.length;
}

// var myDeck = new Deck();
// console.log(myDeck.draw());
// console.log(myDeck.numCardsLeft());

// --------------------------------------------------------------------------------------------------