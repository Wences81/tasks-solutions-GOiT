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
for ( key in object) {
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