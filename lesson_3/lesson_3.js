// const YesNo = prompt('Do you weak up?')
// const promise = new Promise ((resolve, reject) => {
//     resolve = 'good'
//     reject = 'too bad'
//     if(YesNo === 'yes'){
//         alert(resolve)
//     }
//     else if (YesNo === 'no') {
//         alert (reject)

//     }
// })

const WeakUp = new Promise((resolve, reject) => {
  console.log("Weak up?");
  reject();
});

WeakUp.then(() => {
  console.log("Good");
});

WeakUp.catch(() => {
  console.error("will be late for school");
});

const DrinkCoffee = new Promise((resolve, reject) => {
  console.log("Have a coffee?");
  resolve();
});

DrinkCoffee.then(() => {
  console.log("good");
});

DrinkCoffee.catch(() => {
  console.error("You will be tired");
});

const TakeAShower = new Promise((resolve, reject) => {
  console.log("Do you have a shower?");
  resolve();
});

TakeAShower.then(() => {
  console.log("You are clean");
});

TakeAShower.catch(() => {
  console.error("You are so dirty phew");
});

const GoToSchool = new Promise((resolve, reject) => {
  console.log("Are you ready go to school?");
  resolve();
});

GoToSchool.then(() => {
  console.log("Good you will be clever");
});

GoToSchool.catch(() => {
  console.error("you will be so stupid");
});
