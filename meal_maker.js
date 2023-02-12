//Set a meal and the price
const menu = {
    _meal: "",
    _price: 0,
    set meal(mealToCheck) {
      if (typeof mealToCheck === "string") {
        return (this._meal = mealToCheck);
      }
    },
    set price(priceToCheck) {
      if (typeof priceToCheck === "number") {
        return (this._price = priceToCheck);
      }
    },
  
    get todaysSpecial() {
      if (this._meal && this._price) {
        return `Today\'s special is ... ${this._meal} for ${this._price} won! :)`;
      } else {
        return "Meal or price was not set correctly!";
      }
    },
  };
  
  menu.meal = "pasta";
  menu.price = 20000;
  console.log(menu.todaysSpecial);
  