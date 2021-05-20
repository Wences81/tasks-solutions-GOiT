// Task 16
function checkStorage(available, ordered) {
  let message;
  // Пиши код ниже этой строки
  if (available < ordered) {
    message = 'На складе недостаточно товаров!';

  } else {
    message = 'Заказ оформлен, с вами свяжется менеджер';
  }
  // Пиши код выше этой строки
  return message;
}

// Task 18
function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  // Пиши код ниже этой строки
  const totalPrice = pricePerDroid * orderedQuantity;
  if (totalPrice > customerCredits) {
    message = "Недостаточно средств на счету!"
  }

  else {
    message = `Вы купили ${orderedQuantity} дроидов, на счету осталось ${customerCredits - totalPrice} кредитов`
  };

  // Пиши код выше этой строки
  return message;
}

// Task 20

function checkStorage(available, ordered) {
  let message;
  // Пиши код ниже этой строки
  if (ordered === 0) {
    message = "В заказе еще нет товаров"
  } else if (ordered > available) {
    message = 'Слишком большой заказ, на складе недостаточно товаров!'
  } else {
    message = 'Заказ оформлен, с вами свяжется менеджер'
  }


  // Пиши код выше этой строки
  return message;
}

// Task 24

function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;
  let discount;
  // Пиши код ниже этой строки
  if (totalSpent >= 50000) { discount = GOLD_DISCOUNT };
  if (totalSpent >= 20000 && totalSpent < 50000) { discount = SILVER_DISCOUNT };
  if (totalSpent >= 5000 && totalSpent < 20000) { discount = BRONZE_DISCOUNT };
  if (totalSpent < 5000) { discount = BASE_DISCOUNT };

  // Пиши код выше этой строки
  return discount;
}

// Task 33

function formatMessage(message, maxLength) {
  let result;
  // Пиши код ниже этой строки
  if (message.length <= maxLength) {
    result = message;
  } else if (message.length > maxLength) {
    result = message.slice(0, maxLength) + "...";
  }
  // Пиши код выше этой строки
  return result;
}

// Task 35

function checkForName(fullName, name) {
  const result = fullName.includes(name); // Дополни эту строку
  return result;
}

// Task 36

function checkForSpam(message) {
  let result;
  // Write your code under this line
  message = message.toLowerCase();
  if (message.includes("spam") || message.includes("sale")) {
    result = true;

  } else {
    result = false;
  }
  // Write your code above this line
  return result;

}

// MODUL 2

// TASK 2

function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  // Пиши код ниже этой строки


  if (password === ADMIN_PASSWORD) {
    return 'Добро пожаловать!';
  }


  return 'Доступ запрещен, неверный пароль!';
  // Пиши код выше этой строки
}

// TASK 3

function checkStorage(available, ordered) {
  // Пиши код ниже этой строки


  if (ordered === 0) {
    return 'В заказе еще нет товаров';
  }

  if (ordered > available) {
    return 'Слишком большой заказ, на складе недостаточно товаров!';
  }


  return 'Заказ оформлен, с вами свяжется менеджер';
  // Пиши код выше этой строки
}



// TASK 9

function getExtremeElements(array) {
  // Пиши код ниже этой строки


  return [(array[0]), array[array.length - 1]];

  // Пиши код выше этой строки
}



// TASK 11

function calculateEngravingPrice(message, pricePerWord) {
  // Пиши код ниже этой строки
  let totalPrice;

  totalPrice = message.split(" ").length * pricePerWord;


  return totalPrice;
  // Пиши код выше этой строки
}


// TASK 13

function slugify(title) {
  // Пиши код ниже этой строки
  let slug;


  slug = title.toLowerCase().split(" ").join("-");


  return slug;
  // Пиши код выше этой строки
}


// TASK 16

function makeArray(firstArray, secondArray, maxLength) {
  // Пиши код ниже этой строки
  let newArray;

  newArray = firstArray.concat(secondArray).slice(0, maxLength);

  return newArray;


  // Пиши код выше этой строки
}



// TASK 18


function calculateTotal(number) {
  // Пиши код ниже этой строки

  let total = 0;

  for (let i = 0; i <= number; i += 1) {
    total += i
  }


  return total;


  // Пиши код выше этой строки
}


// TASK 20

function calculateTotalPrice(order) {
  let total = 0;
  // Пиши код ниже этой строки
  for (let i = 0; i <= order[i]; i += 1) {

    total += order[i]
  };

  // Пиши код выше этой строки
  return total;
}



// TASK 21

function findLongestWord(string) {
  // Пиши код ниже этой строки
  let longestWord = "";
  const words = string.split(" ");

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;

  // Пиши код выше этой строки
}


// TASK 22

function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Пиши код ниже этой строки
  for (let i = min; i <= max; i += 1) {
    numbers.push(i);
  }
  // Пиши код выше этой строки
  return numbers;
}



// TASK 23

function filterArray(numbers, value) {
  // Пиши код ниже этой строки

  let newNumber = [];

  for (const number of numbers) {

    if (number > value) {

      newNumber.push(number)
    }

  }



  return newNumber;

  // Пиши код выше этой строки
}



// TASK 25

function getCommonElements(array1, array2) {
  // Пиши код ниже этой строки
  let newArray = [];


  for (let element of array1) {
    let secondArray = array2.includes(element);

    if (secondArray) {
      newArray.push(element);
    }
  }



  return newArray;
  // Пиши код выше этой строки
}



// TASK 27

function filterArray(numbers, value) {
  // Пиши код ниже этой строки
  const filteredNumbers = [];

  for (let number of numbers) {


    if (number > value) {
      filteredNumbers.push(number);
    }
  }

  return filteredNumbers;
  // Пиши код выше этой строки
}



// TASK 29

function getEvenNumbers(start, end) {
  // Пиши код ниже этой строки
  let evenNumbers = [];
  for (let i = start; i <= end; i += 1) {
    if (i % 2 === 0) {
      evenNumbers.push(i)
    }
  }

  return evenNumbers;
  // Пиши код выше этой строки
}


// TASK 31

function findNumber(start, end, divisor) {
  // Пиши код ниже этой строки
  let number;

  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
      return i;

    }
  }

  return number;
  // Пиши код выше этой строки
}


// TASK 32

function includes(array, value) {
  // Пиши код ниже этой строки


  for (let element of array) {

    if (element === value) {

      return true;
    }
  }

  return false;
  // Пиши код выше этой строки
}





// MODUL 3

// TASK 10

const apartment = {
  descr: 'Просторная квартира в центре',
  rating: 4,
  price: 2153,
};
const keys = [];
const values = [];
// Пиши код ниже этой строки
for (const key in apartment) {
  keys.push(key);
  values.push(apartment[key]);
}



// TASK 11


const keys = [];
const values = [];
const advert = {
  service: 'apt',
};
const apartment = Object.create(advert);
apartment.descr = 'Просторная квартира в центре';
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {
  // Пиши код ниже этой строки
  if (apartment.hasOwnProperty(key)) {
    keys.push(key);
    values.push(apartment[key]);
  }
  // Пиши код выше этой строки
}


// TASK 12

function countProps(object) {
  let propCount = 0;
  // Пиши код ниже этой строки
  for (key in object) {
    if (object.hasOwnProperty(key)) {
      propCount++;
    }
  }
  // Пиши код выше этой строки
  return propCount;
}




// TASK 13

const apartment = {
  descr: 'Просторная квартира в центре',
  rating: 4,
  price: 2153,
};
const values = [];
// Пиши код ниже этой строки
const keys = Object.keys(apartment);
for (const key of keys) {

  values.push(apartment[key]);
}




// TASK 15

function countProps(object) {
  // Пиши код ниже этой строки
  let propCount = 0;
  const keys = Object.keys(object);

  for (const key of keys) {
    propCount++;
  }

  return propCount;
  // Пиши код выше этой строки
}


// TASK 15

const apartment = {
  descr: 'Просторная квартира в центре',
  rating: 4,
  price: 2153,
};
// Пиши код ниже этой строки
const keys = Object.keys(apartment);
const values = Object.values(apartment);



// TASK 16

function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Пиши код ниже этой строки
  const values = Object.values(salaries);

  for (const value of values) {
    totalSalary += value;
  }
  // Пиши код выше этой строки
  return totalSalary;
}



// TASK 17

const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];
// Пиши код ниже этой строки
for (const color of colors) {

  hexColors.push(color.hex);
  rgbColors.push(color.rgb);
}



// TASK 18

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  // Пиши код ниже этой строки


  for (const product of products) {

    if (productName === product.name) {

      return product.price;
    }

  }

  return null
  // Пиши код выше этой строки
}



// TASK 19

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Пиши код ниже этой строки
  const propValue = [];

  for (const product of products) {

    if (product[propName]) {

      propValue.push(product[propName])
    }
  }

  return propValue;
}




// TASK 20


const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  // Пиши код ниже этой строки

  let totalPrice = 0;


  for (const product of products) {

    if (productName === product.name) {

      totalPrice = product.price * product.quantity;


    }

  }

  return totalPrice;
  // Пиши код выше этой строки
}




// TASK 21


const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Пиши код ниже этой строки
const { yesterday, today, tomorrow } = highTemperatures;



// Пиши код выше этой строки
const meanTemperature = (yesterday + today + tomorrow) / 3;






// TASK 22


const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Пиши код ниже этой строки

const {
  yesterday,
  today,
  tomorrow,
  icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'
} = highTemperatures;

// Пиши код выше этой строки
const meanTemperature = (yesterday + today + tomorrow) / 3;




// TASK 23


const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Пиши код ниже этой строки
const {
  yesterday: highYesterday,
  today: highToday,
  tomorrow: highTomorrow,
  icon: highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
} = highTemperatures;


// Пиши код выше этой строки
const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;





// TASK 24


const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];
// Пиши код ниже этой строки

for (const { hex, rgb } of colors) {

  hexColors.push(hex);
  rgbColors.push(rgb);
}




// TASK 25


const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};
// Пиши код ниже этой строки

const {

  today: { low: lowToday, high: highToday, icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg' },

  tomorrow: { low: lowTomorrow, high: highTomorrow, icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg' },


} = forecast;




// TASK 26


// Пиши код ниже этой строки
function calculateMeanTemperature(forecast) {

  const {
    today: { low: todayLow, high: todayHigh },

    tomorrow: { low: tomorrowLow, high: tomorrowHigh },

  } = forecast;
  // Пиши код выше этой строки
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}





// TASK 27


const scores = [89, 64, 42, 17, 93, 51, 26];
// Пиши код ниже этой строки
const bestScore = Math.max(...scores);
const worstScore = Math.min(...scores);





// TASK 28

const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];
// Пиши код ниже этой строки
const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores);




// TASK 29


const defaultSettings = {
  theme: 'light',
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};
// Пиши код ниже этой строки
const finalSettings = { ...defaultSettings, ...overrideSettings };





// TASK 30

function makeTask(data) {
  const completed = false;
  const category = 'Общее';
  const priority = 'Обычный';
  // Пиши код ниже этой строки
  const newData = { completed, category, priority, ...data }
  return newData
  // Пиши код выше этой строки
}




// TASK 31


// Пиши код ниже этой строки
function add(...args) {
  let total = 0;
  for (const arg of args) {
    total += arg;
  }
  return total;
  // Пиши код выше этой строки
}





// TASK 32


// Пиши код ниже этой строки
function addOverNum(firstArgs, ...args) {
  let total = 0;

  for (const arg of args) {
    if (arg > firstArgs) {
      total += arg;

    }
  }
  return total
  // Пиши код выше этой строки
}





// TASK 33


function findMatches(array, ...args) {
  const matches = []; // Не изменяй эту строку

  for (const arg of args) {

    if (array.includes(arg)) {

      matches.push(arg);


    }
  }

  // Пиши код выше этой строки
  return matches;
}




// TASK 34


const bookShelf = {
  // Пиши код ниже этой строки
  books: ['Последнее королевство', 'Страж снов'],
  getBooks() {
    return 'Возвращаем все книги';
  },
  addBook(bookName) {
    return `Добавляем книгу ${bookName}`;
  },

  removeBook(bookName) {
    return `Удаляем книгу ${bookName}`;
  },

  updateBook(oldName, newName) {
    return `Обновляем книгу ${oldName} на ${newName}`;
  },
  // Пиши код выше этой строки
};





// TASK 35


const bookShelf = {
  books: ['Последнее королевство', 'Мгла', 'Страж снов'],
  updateBook(oldName, newName) {
    // Пиши код ниже этой строки
    const bookIndex = this.books.indexOf(oldName);
    this.books.splice(bookIndex, 1, newName);


    // Пиши код выше этой строки
  },
};





// TASK 36


const atTheOldToad = {
  // Пиши код ниже этой строки
  potions: [],
  getPotions() {
    return this.potions
  }
  // Пиши код выше этой строки
};




// TASK 37


const atTheOldToad = {
  // Пиши код ниже этой строки
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
  getPotions() {
    this.potions.push()
    return this.potions
  }
  // Пиши код выше этой строки
};




// TASK 38


const atTheOldToad = {
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
  addPotion(potionName) {
    // Пиши код ниже этой строки
    this.potions.push(potionName)
    // Пиши код выше этой строки
  },
};





// TASK 39



const atTheOldToad = {
  potions: ["Зелье скорости", "Дыхание дракона", "Каменная кожа"],
  removePotion(potionName) {
    // Пиши код ниже этой строки
    const potionindex = this.potions.indexOf(potionName);
    this.potions.splice(potionindex, 1)
    // Пиши код выше этой строки
  },
};





// TASK 40


const atTheOldToad = {
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
  updatePotionName(oldName, newName) {
    // Пиши код ниже этой строки
    const potionsIndex = this.potions.indexOf(oldName);
    this.potions.splice(potionsIndex, 1, newName);
    // Пиши код выше этой строки
  },
};




// TASK 41


const atTheOldToad = {
  potions: [
    { name: 'Зелье скорости', price: 460 },
    { name: 'Дыхание дракона', price: 780 },
    { name: 'Каменная кожа', price: 520 },
  ],
  // Пиши код ниже этой строки
  getPotions() {
    return this.potions;
  },
  addPotion(potionName) {
    if (this.potions.includes(potionName)) {
      return `Зелье ${potionName} уже есть в инвентаре!`;
    }

    this.potions.push(potionName);
  },


  removePotion(potionName) {

    const { potions } = this;

    for (let i = 0; i < potions.length; i += 1) {
      const potion = potions[i];

      if (potionName === potion.name) {
        potions.splice(i, 1);
      }
    }
  },


  updatePotionName(oldName, newName) {
    const { potions } = this;

    for (let i = 0; i < potions.length; i += 1) {


      if (oldName === potions[i].name) {

        potions[i].name = newName;

      }
    }


  },
  // Пиши код выше этой строки
};






// MODUL 4


// TASK 1


function makePizza() {
  return 'Ваша пицца готовится, ожидайте.';
}
// Пиши код ниже этой строки

const result = (makePizza('Ваша пицца готовится, ожидайте.'));
const pointer = (makePizza);





// TASK 2



function deliverPizza(pizzaName) {
  return `Доставляем пиццу ${pizzaName}.`;
}

function makePizza(pizzaName) {
  return `Пицца ${pizzaName} готовится, ожидайте...`;
}

// Пиши код ниже этой строки
function makeMessage(pizzaName, callback) {

  callback(makePizza, deliverPizza);

  return callback(pizzaName);
}





// TASK 3


function makePizza(pizzaName, callback) {
  console.log(`Пицца ${pizzaName} готовится, ожидайте...`);
  callback(pizzaName);
}

makePizza('Роял гранд', function deliverPizza(pizzaName) {
  console.log(`Доставляем пиццу ${pizzaName}.`);
});
// Пиши код ниже этой строки

makePizza('Ультрасыр', function eatPizza(pizzaName) {

  console.log(`Едим пиццу ${pizzaName}.`);
});





// TASK 4


const pizzaPalace = {
  pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
  order(pizzaName, onSuccess, onError) {

    if (!this.pizzas.includes(pizzaName)) {

      return onOrderError(`В ассортименте нет пиццы с названием ${pizzaName}.`);


    }
    return makePizza(pizzaName);
  },
};
// Пиши код выше этой строки

// Колбэк для onSuccess
function makePizza(pizzaName) {
  return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
}

// Колбэк для onError
function onOrderError(error) {
  return `Ошибка! ${error}`;
}

// Вызовы метода с колбэками
pizzaPalace.order('Аль Копчино', makePizza, onOrderError);
pizzaPalace.order('Четыре нарезона', makePizza, onOrderError);
pizzaPalace.order('Биг майк', makePizza, onOrderError);
pizzaPalace.order('Венская', makePizza, onOrderError);






// TASK 5


const pizzaPalace = {
  pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
  // Пиши код ниже этой строки
  checkPizza(pizzaName) {
    return this.pizzas.includes(pizzaName);
  },
  order(pizzaName) {
    const isPizzaAvailable = this.checkPizza(pizzaName);

    if (!isPizzaAvailable) {
      return `В ассортименте нет пиццы с названием «${pizzaName}».`;
    }

    return `Заказ принят, готовим пиццу «${pizzaName}».`;
  },
  // Пиши код выше этой строки
};






// TASK 6



const customer = {
  username: 'Mango',
  balance: 24000,
  discount: 0.1,
  orders: ['Burger', 'Pizza', 'Salad'],
  // Пиши код ниже этой строки
  getBalance() {
    return this.balance;
  },
  getDiscount() {
    return this.discount;
  },
  setDiscount(value) {
    this.discount = value;
  },
  getOrders() {
    return this.orders;
  },
  addOrder(cost, order) {
    this.balance -= cost - cost * this.discount;
    this.orders.push(order);
  },
  // Пиши код выше этой строки
};

customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, 'Steak');
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ['Burger', 'Pizza', 'Salad', 'Steak']






// TASK 7



const orders = [
  { email: 'solomon@topmail.ua', dish: 'Burger' },
  { email: 'artemis@coldmail.net', dish: 'Pizza' },
  { email: 'jacob@mail.com', dish: 'Taco' },
];

// Пиши код ниже этой строки
function composeMessage(position) {
  
  return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${++position}-й в очереди.`;

}

const messages = [];

for (let key = 0; key < Object.keys(orders).length; key++) {
  
  messages.push(composeMessage.call(orders[key], key));
  

};
console.log(messages);
 





// TASK 8



const orders = [
  { email: "solomon@topmail.ua", dish: "Burger" },
  { email: "artemis@coldmail.net", dish: "Pizza" },
  { email: "jacob@mail.com", dish: "Taco" },
];

// Пиши код ниже этой строки
function composeMessage(position) {
  return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
}

const messages = [];
for (let i = 0; i < orders.length; i++) {
  const msg = composeMessage.apply(orders[i], [i + 1]);
  messages.push(msg);
}
console.log(messages)







// TASK 9



const pizzaPalace = {
  company: 'Pizza Palace',
};

const burgerShack = {
  company: 'Burger Shack',
};

function composeMessage(customerName) {
  return `${customerName}, всегда рады вас видеть в «${this.company}».`;
}
// Пиши код ниже этой строки

const pizzaPalaceComposer = composeMessage.bind(pizzaPalace);
const pizzaPalaceMessage = pizzaPalaceComposer('Манго');

const burgerShackComposer = composeMessage.bind(burgerShack);
const burgerShackMessage = burgerShackComposer('Поли');






// TASK  10



const service = {
  mailingList: ['mango@mail.com', 'poly@hotmail.de', 'ajax@jmail.net'],
  subscribe(email) {
    this.mailingList.push(email);
    return `Почта ${email} добавлена в рассылку.`;
  },
  unsubscribe(email) {
    this.mailingList = this.mailingList.filter((e) => e !== email);
    return `Почта ${email} удалена из рассылки.`;
  },
};

function logAndInvokeAction(email, action) {
  console.log(`Выполняем действие с ${email}.`);
  return action(email);
}

const firstInvoke = logAndInvokeAction('kiwi@mail.uk', service.subscribe.bind(service));
console.log(firstInvoke);
// Почта kiwi@mail.uk добавлена в рассылку.

console.log(service.mailingList);
/* ['mango@mail.com', 
    'poly@hotmail.de', 
    'ajax@jmail.net', 
    'kiwi@mail.uk']*/
const secondInvoke = logAndInvokeAction('poly@hotmail.de', service.unsubscribe.bind(service));
console.log(secondInvoke);
// Почта poly@hotmail.de удалена из рассылки.

console.log(service.mailingList); // ['mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk']










// MODUL 5




// TASK 1


const parent = {
  name: 'Stacey',
  surname: 'Moore',
  age: 54,
  heritage: 'Irish'
};
// Пиши код ниже этой строки

const child = Object.create(parent);

// Пиши код выше этой строки
child.name = 'Jason';
child.age = 27;






// TASK 2



const ancestor = {
  name: 'Paul',
  age: 83,
  surname: 'Dawson',
  heritage: 'Irish'
};
// Пиши код ниже этой строки

const parent = Object.create(ancestor);
parent.name = 'Stacey';
parent.surname = 'Moore';
parent.age = 54;

const child = Object.create(parent);
child.name = 'Jason';
child.age = 27;

// Пиши код выше этой строки





// TASK 5



function Car({ brand, model, price }) {
  this.brand = brand;
  this.model = model;
  this.price = price;
}
Car.prototype.getPrice = function () {
  return this.price;
};

Car.prototype.changePrice = function (newPrice) {
  this.price = newPrice;
};





// TASK 6



function Storage(items) {
  this.items = items;
}

Storage.prototype.getItems = function() {
  return this.items;
};
Storage.prototype.addItem = function(newItem) {
  this.items.push(newItem);
};
Storage.prototype.removeItem = function(item) {
  this.items.splice(1,1);
};


// Пиши код выше этой строки
const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
storage.addItem('Дроид');
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
storage.removeItem('Пролонгер');
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]






// TASK 7




function StringBuilder(baseValue) {
  this.value = baseValue;
}
StringBuilder.prototype.getValue = function() {
  return this.value;
}
StringBuilder.prototype.padEnd = function(str) {
  this.value += str;
}

StringBuilder.prototype.padStart = function(str) {
  this.value = str + this.value;
}
StringBuilder.prototype.padBoth = function(str) {
  this.value = str + this.value + str;
}
// Пиши код выше этой строки
const builder = new StringBuilder('.');
console.log(builder.getValue()); // '.'
builder.padStart('^');
console.log(builder.getValue()); // '^.'
builder.padEnd('^');
console.log(builder.getValue()); // '^.^'
builder.padBoth('=');
console.log(builder.getValue()); // '=^.^='






// TASK 9



class Car {
  
  
  
  constructor({ brand, model, price }) {
    
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
}







// TASK 10



class Car {
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  getPrice() {
    return this.price;
  }
  changePrice(newPrice) {
    this.price = newPrice;
  }
}







// TASK 11



class Car {
  #brand;
  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.model = model;
    this.price = price;
  }
  getBrand() {
    return this.#brand;
  }
  changeBrand(newBrand) {
    this.#brand = newBrand;
  }
}







// TASK 12




class Storage {
  #items;
constructor( items ) {
  this.#items = items;
}

getItems() {
  return this.#items;
};

addItem (newItem) {
  this.#items.push(newItem);
}

removeItem(item) {
  const itemIndex = this.#items.indexOf(item);
  this.#items.splice(itemIndex, 1);
};
}
// Пиши код выше этой строки
const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
storage.addItem("Дроид");
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
storage.removeItem("Пролонгер");
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]








// TASK 13




class StringBuilder {
  #value;
constructor( value ) {
  this.#value = value;
}

getValue() {
  return this.#value;
};

padEnd(str) {
  this.#value += str;
};

padStart(str) {
  this.#value = str + this.#value;
};

padBoth(str) {
  this.padStart(str);
  this.padEnd(str);
};
}
// Пиши код выше этой строки
const builder = new StringBuilder('.');
console.log(builder.getValue()); // '.'
builder.padStart('^');
console.log(builder.getValue()); // '^.'
builder.padEnd('^');
console.log(builder.getValue()); // '^.^'
builder.padBoth('=');
console.log(builder.getValue()); // '=^.^='







// TASK 14




class Car {
  #model;
  #price;
  #brand;

  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.#model = model;
    this.#price = price;
  }

  get brand() {
    return this.#brand;
  }

  set brand(newBrand) {
    this.#brand = newBrand;
  }

  get model() {
    return this.model;
  }

  set model(newModel) {
    this.model = newModel;
  }

  get price() {
    return this.price;
  }

  set price(newPrice) {
    this.price = newPrice;
  }
}








// TASK 15




class Car {
  // Пиши код ниже этой строки
  static MAX_PRICE = 50000;
  #price;

  constructor( {price} ) {
    this.#price = price;
  }

  get price() {
   return this.#price;
  }

  set price(newPrice) {
    if (Car.MAX_PRICE < newPrice) {
      return this.#price;
      }
    this.#price = newPrice;
  }
  // Пиши код выше этой строки
}

const audi = new Car({price: 35000});
console.log(audi.price); // 35000

audi.price = 49000;
console.log(audi.price); // 49000

audi.price = 51000;
console.log(audi.price); // 49000








// TASK 16




class Car {
  static #MAX_PRICE = 50000;
  // Пиши код ниже этой строки
 static checkPrice(price) {
   if (price > Car.#MAX_PRICE) {
     return 'Внимание! Цена превышает допустимую.';
   }
   return 'Всё хорошо, цена в порядке.';
 }
     
  // Пиши код выше этой строки
  constructor({ price }) {
    this.price = price;
  }
}

const audi = new Car({ price: 36000 });
const bmw = new Car({ price: 64000 });

console.log(Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
console.log(Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую.







// TASK 17




class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
// Пиши код ниже этой строки
class Admin extends User {
  static AccessLevel = { BASIC: 'basic', SUPERUSER: 'superuser' }
}







// TASK 18




class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class Admin extends User {
  // Пиши код ниже этой строки
  accessLevel;
  
  constructor({email, accessLevel}) {
    super(email);
    this.accessLevel = accessLevel;
  }
    
  static AccessLevel = {
    BASIC: 'basic',
    SUPERUSER: 'superuser'
  };

  // Пиши код выше этой строки
}

const mango = new Admin({
  email: 'mango@mail.com',
  accessLevel: Admin.AccessLevel.SUPERUSER
});

console.log(mango.email); // mango@mail.com
console.log(mango.accessLevel); // superuser






// TASK 19




class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {
  // Пиши код ниже этой строки

  static AccessLevel = {
    BASIC: 'basic',
    SUPERUSER: 'superuser'
  };

  accessLevel;
  blacklistedEmails = [];

  constructor({ email, accessLevel }) {
    super(email);
    this.accessLevel = accessLevel;
  }
  blacklist(email) {
    this.blacklistedEmails.push(email);
  }
  
  isBlacklisted(email) {
    return this.blacklistedEmails.includes(email);
  }
  // Пиши код выше этой строки
}

const mango = new Admin({
  email: 'mango@mail.com',
  accessLevel: Admin.AccessLevel.SUPERUSER
});

console.log(mango.email); // mango@mail.com
console.log(mango.accessLevel); // superuser
mango.blacklist('poly@mail.com');
console.log(mango.blacklistedEmails); // 'poly@mail.com'
console.log(mango.isBlacklisted('mango@mail.com')); //  false
console.log(mango.isBlacklisted('poly@mail.com')); // true