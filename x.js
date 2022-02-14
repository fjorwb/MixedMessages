//Mixed messages project - Signature Move Name Generator

colour = ["Red ", "Orange ", "Yellow ", "Green ", "Blue ", "Indigo ", "Violet ", "White ", "Black ", "Brown ", "Grey "];
adjective = [
  "Secret ",
  "Big ",
  "Shining ",
  "Lustrous ",
  "Violent ",
  "Giga ",
  "Super ",
  "Mega ",
  "Ultra ",
  "Wild ",
  "Hidden ",
  "Fiery ",
  "Icy ",
  "Evil ",
  "Virtuous ",
  "Lovely ",
];
noun = [
  "Moon ",
  "Water ",
  "Fire ",
  "Wind ",
  "Wolf ",
  "Tiger ",
  "Elephant ",
  "Venom ",
  "Sun ",
  "Mountain ",
  "Rocket ",
  "Mind ",
  "Soul ",
  "Earth ",
  "Light ",
  "Shadow ",
  "Galaxy ",
  "Storm ",
];
attack = ["Cutter", "Bomber", "Beam", "Attack", "Combo", "Blast", "Energy Wave", "Punch", "Kick", "Slice", "Fist", "Stare"];

const randomizer = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

let megaAttack = randomizer(adjective) + randomizer(colour) + randomizer(noun) + randomizer(attack);

console.log(`You are a shounen anime character and you need to come up with a name for your signature move!`);
console.log(`Don't worry, this Signature Move Name Generator can help!`);
console.log(``);
console.log(`Your penultimate attack is called: ${megaAttack}!`);
