// Original 151 Pokémon names and their numbers
const pokemonList = [
  { name: 'Bulbasaur', number: 1 },
  { name: 'Ivysaur', number: 2 },
  { name: 'Venusaur', number: 3 },
  { name: 'Charmander', number: 4 },
  { name: 'Charmeleon', number: 5 },
  { name: 'Charizard', number: 6 },
  { name: 'Squirtle', number: 7 },
  { name: 'Wartortle', number: 8 },
  { name: 'Blastoise', number: 9 },
  { name: 'Caterpie', number: 10 },
  { name: 'Metapod', number: 11 },
  { name: 'Butterfree', number: 12 },
  { name: 'Weedle', number: 13 },
  { name: 'Kakuna', number: 14 },
  { name: 'Beedrill', number: 15 },
  { name: 'Pidgey', number: 16 },
  { name: 'Pidgeotto', number: 17 },
  { name: 'Pidgeot', number: 18 },
  { name: 'Rattata', number: 19 },
  { name: 'Raticate', number: 20 },
  { name: 'Spearow', number: 21 },
  { name: 'Fearow', number: 22 },
  { name: 'Ekans', number: 23 },
  { name: 'Arbok', number: 24 },
  { name: 'Pikachu', number: 25 },
  { name: 'Raichu', number: 26 },
  { name: 'Sandshrew', number: 27 },
  { name: 'Sandslash', number: 28 },
  { name: 'Nidoran', number: 29 },
  { name: 'Nidorina', number: 30 },
  { name: 'Nidoqueen', number: 31 },
  { name: 'Nidoran', number: 32 },
  { name: 'Nidorino', number: 33 },
  { name: 'Nidoking', number: 34 },
  { name: 'Clefairy', number: 35 },
  { name: 'Clefable', number: 36 },
  { name: 'Vulpix', number: 37 },
  { name: 'Ninetales', number: 38 },
  { name: 'Jigglypuff', number: 39 },
  { name: 'Wigglytuff', number: 40 },
  { name: 'Zubat', number: 41 },
  { name: 'Golbat', number: 42 },
  { name: 'Oddish', number: 43 },
  { name: 'Gloom', number: 44 },
  { name: 'Vileplume', number: 45 },
  { name: 'Paras', number: 46 },
  { name: 'Parasect', number: 47 },
  { name: 'Venonat', number: 48 },
  { name: 'Venomoth', number: 49 },
  { name: 'Diglett', number: 50 },
  { name: 'Dugtrio', number: 51 },
  { name: 'Meowth', number: 52 },
  { name: 'Persian', number: 53 },
  { name: 'Psyduck', number: 54 },
  { name: 'Golduck', number: 55 },
  { name: 'Mankey', number: 56 },
  { name: 'Primeape', number: 57 },
  { name: 'Growlithe', number: 58 },
  { name: 'Arcanine', number: 59 },
  { name: 'Poliwag', number: 60 },
  { name: 'Poliwhirl', number: 61 },
  { name: 'Poliwrath', number: 62 },
  { name: 'Abra', number: 63 },
  { name: 'Kadabra', number: 64 },
  { name: 'Alakazam', number: 65 },
  { name: 'Machop', number: 66 },
  { name: 'Machoke', number: 67 },
  { name: 'Machamp', number: 68 },
  { name: 'Bellsprout', number: 69 },
  { name: 'Weepinbell', number: 70 },
  { name: 'Victreebel', number: 71 },
  { name: 'Tentacool', number: 72 },
  { name: 'Tentacruel', number: 73 },
  { name: 'Geodude', number: 74 },
  { name: 'Graveler', number: 75 },
  { name: 'Golem', number: 76 },
  { name: 'Ponyta', number: 77 },
  { name: 'Rapidash', number: 78 },
  { name: 'Slowpoke', number: 79 },
  { name: 'Slowbro', number: 80 },
  { name: 'Magnemite', number: 81 },
  { name: 'Magneton', number: 82 },
  { name: 'Farfetch’d', number: 83 },
  { name: 'Doduo', number: 84 },
  { name: 'Dodrio', number: 85 },
  { name: 'Seel', number: 86 },
  { name: 'Dewgong', number: 87 },
  { name: 'Grimer', number: 88 },
  { name: 'Muk', number: 89 },
  { name: 'Shellder', number: 90 },
  { name: 'Cloyster', number: 91 },
  { name: 'Gastly', number: 92 },
  { name: 'Haunter', number: 93 },
  { name: 'Gengar', number: 94 },
  { name: 'Onix', number: 95 },
  { name: 'Drowzee', number: 96 },
  { name: 'Hypno', number: 97 },
  { name: 'Krabby', number: 98 },
  { name: 'Kingler', number: 99 },
  { name: 'Voltorb', number: 100 },
  { name: 'Electrode', number: 101 },
  { name: 'Exeggcute', number: 102 },
  { name: 'Exeggutor', number: 103 },
  { name: 'Cubone', number: 104 },
  { name: 'Marowak', number: 105 },
  { name: 'Hitmonlee', number: 106 },
  { name: 'Hitmonchan', number: 107 },
  { name: 'Lickitung', number: 108 },
  { name: 'Koffing', number: 109 },
  { name: 'Weezing', number: 110 },
  { name: 'Rhyhorn', number: 111 },
  { name: 'Rhydon', number: 112 },
  { name: 'Chansey', number: 113 },
  { name: 'Tangela', number: 114 },
  { name: 'Kangaskhan', number: 115 },
  { name: 'Horsea', number: 116 },
  { name: 'Seadra', number: 117 },
  { name: 'Goldeen', number: 118 },
  { name: 'Seaking', number: 119 },
  { name: 'Staryu', number: 120 },
  { name: 'Starmie', number: 121 },
  { name: 'Mr. Mime', number: 122 },
  { name: 'Scyther', number: 123 },
  { name: 'Jynx', number: 124 },
  { name: 'Electabuzz', number: 125 },
  { name: 'Magmar', number: 126 },
  { name: 'Pinsir', number: 127 },
  { name: 'Tauros', number: 128 },
  { name: 'Magikarp', number: 129 },
  { name: 'Gyarados', number: 130 },
  { name: 'Lapras', number: 131 },
  { name: 'Ditto', number: 132 },
  { name: 'Eevee', number: 133 },
  { name: 'Vaporeon', number: 134 },
  { name: 'Jolteon', number: 135 },
  { name: 'Flareon', number: 136 },
  { name: 'Porygon', number: 137 },
  { name: 'Omanyte', number: 138 },
  { name: 'Omastar', number: 139 },
  { name: 'Kabuto', number: 140 },
  { name: 'Kabutops', number: 141 },
  { name: 'Aerodactyl', number: 142 },
  { name: 'Snorlax', number: 143 },
  { name: 'Articuno', number: 144 },
  { name: 'Zapdos', number: 145 },
  { name: 'Moltres', number: 146 },
  { name: 'Dratini', number: 147 },
  { name: 'Dragonair', number: 148 },
  { name: 'Dragonite', number: 149 },
  { name: 'Mewtwo', number: 150 },
  { name: 'Mew', number: 151 },
];

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomSpecialCharacter() {
  const specialCharacters = '!@#$%^&*()_+{}[]|:;<>?,./';
  return specialCharacters.charAt(
    Math.floor(Math.random() * specialCharacters.length)
  );
}

function getRandomCaseCharacter(char) {
  return Math.random() < 0.5 ? char.toUpperCase() : char.toLowerCase();
}

function generatePassword() {
  const randomPokemon = getRandomElement(pokemonList);
  const pokemonName = randomPokemon.name;
  const pokemonNumber = randomPokemon.number;
  let passwordParts = [];

  const includeSpecial = document.getElementById('include-special').checked;
  const passwordLength = parseInt();
  //document.getElementById('password-length').value

  // Insert characters from the Pokémon name mixed with optional special characters and random cases
  for (let char of pokemonName) {
    passwordParts.push(getRandomCaseCharacter(char));
    if (includeSpecial && Math.random() < 0.3) {
      // 30% chance to add a special character
      passwordParts.push(getRandomSpecialCharacter());
    }
  }

  // Always include the Pokémon number
  passwordParts.push(pokemonNumber);

  // Add some random numbers for extra security
  while (passwordParts.length < passwordLength) {
    passwordParts.push(Math.floor(Math.random() * 10));
    if (includeSpecial && passwordParts.length < passwordLength) {
      passwordParts.push(getRandomSpecialCharacter());
    }
  }

  // Shuffle the array to mix characters
  //passwordParts = passwordParts
  //.sort(() => Math.random() - 0.5)
  //.slice(0, passwordLength);

  // Create final password string
  const password = passwordParts.join('');

  document.getElementById('password-output').textContent = password;
}
