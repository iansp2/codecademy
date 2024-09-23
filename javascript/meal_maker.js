const menu = {
  _meal: null,
  set meal(mealToCheck) {
    if (typeof mealToCheck === "string") {
      this._meal = mealToCheck;
    } else {
      console.log("Meal needs to be a string");
    }
  },
  _price: null,
  set price(priceToCheck) {
    if (typeof priceToCheck === "number") {
      this._price = priceToCheck;
    } else {
      console.log("Price needs to be a numebr");
    }
  },
    get todaysSpecial() {
      if (this._meal && this._price) {
        return `Today’s special is ${this._meal} for \$${this._price}!`
      } else {
        return 'There are no specials today. Come back tomorrow!'
      }
  }
};

menu.meal = "burger";
menu.price = 12;

console.log(menu.todaysSpecial);