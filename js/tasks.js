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