class Wallet {
  constructor(color, creditCardCapacity, weight, brand, owner) {
    this.color = color || "white";
    this.creditCardCapacity = creditCardCapacity || 2;
    this.weight = weight || 250;
    this.brand = brand || "chanel";
    this.owner = owner || "Bea";
    this.money = 0;
    this.creditCards = [];
  }

  getColor() {
    return this.color;
  }

  getCreditCardCapacity() {
    return this.creditCardCapacity;
  }

  getWeight() {
    return this.weight;
  }

  getBrand() {
    return this.brand;
  }

  getOwner() {
    return this.owner;
  }

  getMoney() {
    return this.money;
  }

  getCreditCards() {
    return this.creditCards;
  }

  setColor(color) {
    this.color = color;
  }

  setCreditCardCapacity(capacity) {
    this.creditCardCapacity = capacity;
  }

  setWeight(weight) {
    this.weight = weight;
  }

  setBrand(brand) {
    this.brand = brand;
  }

  setOwner(owner) {
    this.owner = owner;
  }

  setMoney(amount) {
    this.money = amount;
  }

  setCreditCards(creditCards) {
    this.creditCards = creditCards;
  }

  getTotalMoney() {
    let totalCardsAmount = 0;
    for (let cardPosition = 0; cardPosition < this.creditCards.length; cardPosition++) {
      totalCardsAmount += this.creditCards[cardPosition][1];
    }

    return totalCardsAmount + this.money;
  }

  addCash(amount) {
    this.money += amount;
  }

  addMoneyToCreditCard(creditCardName, amount) {
    let cardPosition = 0;

    while (cardPosition < this.creditCards.length) {
      if (this.creditCards[cardPosition][0].toLowerCase() === creditCardName.toLowerCase()) {
        this.creditCards[cardPosition][1] += amount;

        return;
      }
      cardPosition++;
    }
  }

  addCreditCard(creditCardName, amount) {
    if (this.creditCards.length >= this.creditCardCapacity) {
      console.log("Your wallet is full, can't take more credit cards!");

      return;
    } else {
      this.creditCards.push([creditCardName, amount]);
    }
  }

  deductCash(amount) {
    if (this.money <= amount) {
      this.money = 0;
    } else {
      this.money -= amount;
    }
  }

  deductMoneyFromCreditCrad(creditCardName, amount) {
    let cardPosition = 0;

    while (cardPosition < this.creditCards.length) {
      if (this.creditCards[cardPosition][0].toLowerCase() === creditCardName.toLowerCase()) {
        if (this.creditCards[cardPosition][1] < amount) {

          return "Your balance is insufficient";
        }
        this.creditCards[cardPosition][1] -= amount;
        return;
      }
      cardPosition++;
    }
  }
}

let wallet1 = new Wallet("white", 3, 250, "chanel", "Bea");

wallet1.setMoney(500);

wallet1.setCreditCards([
  ["Visa", 300],
  ["BRED", 200],
]);

console.log(wallet1.getMoney());
console.log(wallet1.getCreditCards());
console.log(wallet1.getTotalMoney());

wallet1.addCash(100);
wallet1.addCreditCard("Bni", 400);

console.log(wallet1.getTotalMoney());