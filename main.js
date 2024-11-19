// ● setTimeout ფუნქცია იყენებს callback-ს,
// დაწერეთ მისი promise-ზე დადაფუძნებული
// ალტერნატივა
// ● (მაგ: mySetTimeout(delay).then(...)

// setTimeout-ის Promise ალტერნატივა
function mySetTimeout(delay) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

// სათამაშოს დამზადება
function makeToy(time) {
  return mySetTimeout(time).then(() => {
    console.log("Toy has been manufactured.");
    return true;
  });
}

// სათამაშოს მიწოდება
function deliverToys(time) {
  return mySetTimeout(time).then(() => {
    console.log("Toy has been delivered.");
    return true;
  });
}

// სათამაშოს გაყიდვა
function sellToy(time) {
  return mySetTimeout(time).then(() => {
    console.log("Toy has been sold.");
    return true;
  });
}

// პროცესი (Promise chaining)
makeToy(3000)
  .then(() => deliverToys(2000))
  .then(() => sellToy(1000))
  .catch((error) => {
    console.error("An error occurred:", error);
  });

// ● გამოიყენე პირველ დავალებაში შექმნილი
// ფუნქცია, რათა განავრცო ჩვენს მიერ
// დაწერილი “Toy Shop” შემდეგი პირობის
// იმპლემენტაციით:
// ➔ სათამაშოს დამზადებას სჭირდება
// დაახლოებით 3 წამი. (დროის მითითება
// შესაძლებელი უნდა იყოს დინამიურად)
// ➔ დავამატოთ კიდევ ერთი ნაბიჯი, რომელსაც
// დავარქმევთ პირობითად, “deliverToys”,
// რომლის დაყოვნებაც 2 წამია
// (გადაეცემა დინამიურად)
// ➔ სათამაშოს გაყიდვას სჭირდება 1 წამი
// (დინამიურად)
// ● ყოველი მომდევნო ნაბიჯი უნდა
// ელოდებოდეს წინა ნაბიჯის რეზულტატს და
// შესაბამისად წყვეტდეს მოხდება თუ არა
// მისი შესრულება
// ● გამოიყენე .then().catch() და async/await
// ● სინტაქსები. (2 ვარიანტი)

// setTimeout-ის Promise ალტერნატივა
function mySetTimeout(delay) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

// სათამაშოს დამზადება
async function makeToy(time) {
  await mySetTimeout(time);
  console.log("Toy has been manufactured.");
}

// სათამაშოს მიწოდება
async function deliverToys(time) {
  await mySetTimeout(time);
  console.log("Toy has been delivered.");
}

// სათამაშოს გაყიდვა
async function sellToy(time) {
  await mySetTimeout(time);
  console.log("Toy has been sold.");
}

// პროცესის შესრულება
async function toyShopProcess() {
  try {
    await makeToy(3000);
    await deliverToys(2000);
    await sellToy(1000);
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

toyShopProcess();
