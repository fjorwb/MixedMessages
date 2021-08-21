// Arrays with variables grouped in three categories to emsemble the message.

const mess1 = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];

const mess2 = ["today", "by noon", "by the afternoon", "by night", "during the morning", "at lunch", "before dinner", "after breakfast"];

const mess3 = ["meet somebody", "fall", "fall sleep", "jump up", "sit down"];

// Create three function to obtain random numbers for generate three different messages.

const rand1 = () => {
  return Math.floor(Math.random() * 12);
};

const rand2 = () => {
  return Math.floor(Math.random() * 8);
};
const rand3 = () => {
  return Math.floor(Math.random() * 5);
};

// Function to emsemble the message

const message = () => {
  let a = rand1();
  let b = rand2();
  let c = rand3();

  console.log(`Sign : ${mess1[a]}`);
  console.log(`Is expected that you will ${mess3[c]}`);
  console.log(`${mess2[b]}. Good Luck!`);
  console.log("--------------------------------------------------");
};

// Run the function 20 times so it will display the mixed messages

let n = 20;

setInterval(() => {
  message();
}, 2000);
