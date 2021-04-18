// Task 16
function checkStorage(available, ordered) {
  let message;
  // Пиши код ниже этой строки
if (available < ordered){
  message = 'На складе недостаточно товаров!';
 
} else {
  message =  'Заказ оформлен, с вами свяжется менеджер';
}  
  // Пиши код выше этой строки
  return message;
}

// Task 18
function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  // Пиши код ниже этой строки
const totalPrice = pricePerDroid * orderedQuantity;
  if (totalPrice > customerCredits){
    message = "Недостаточно средств на счету!"}
  
  else {
    message = `Вы купили ${orderedQuantity} дроидов, на счету осталось ${customerCredits - totalPrice} кредитов`};
                                    
  // Пиши код выше этой строки
  return message;
}

// Task 20

function checkStorage(available, ordered) {
  let message;
  // Пиши код ниже этой строки
  if(ordered === 0) {
    message = "В заказе еще нет товаров"
  } else if(ordered > available) {
    message = 'Слишком большой заказ, на складе недостаточно товаров!'
  } else {
    message = 'Заказ оформлен, с вами свяжется менеджер'}
         

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
  if (totalSpent >= 50000) {discount = GOLD_DISCOUNT};
  if (totalSpent >= 20000 && totalSpent < 50000) {discount = SILVER_DISCOUNT};
  if (totalSpent >= 5000 && totalSpent < 20000) {discount = BRONZE_DISCOUNT};
  if (totalSpent < 5000) {discount = BASE_DISCOUNT};

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

