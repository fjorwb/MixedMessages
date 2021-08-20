// Arrays with variables grouped in three categories to emsemble the message.

const mess1 = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];

const mess2 = ["today", "noon", "afternoon", "night", "morning", "lunch", "dinner", "breakfast"];

const mess3 = ["meet", "fall", "sleep", "jump", "sit"];

// Create three function to obtain random numbers for generate three different messages.

const rand1 = () => {
  return Math.floor(Math.random() * 13);
};

const rand2 = () => {
  return Math.floor(Math.random() * 9);
};
const rand3 = () => {
  return Math.floor(Math.random() * 5);
};

// Function to emsemble the message

const message = () => {
  let a = rand1();
  let b = rand2();
  let c = rand3();

  console.log(`Sign : ${_.capitalize(mess1[a])}`);
  console.log(`Is expected that you will ${mess3[c]}`);
  console.log(`by the ${mess2[b]}`);
};
