const axios = require('axios');

axios.get('https://footballapi.pulselive.com/football/compseasons/578/teams', {
  headers: {
    'Origin': 'https://www.premierleague.com'
  }
})
  .then((response) => {
    data = response.data
    // Loop through each object in the array
    for (let i = 0; i < data.length; i++) {
    const obj = data[i];
  
    // Print the grounds for this object
    console.log(`Grounds for ${obj.name}:`);
    for (let j = 0; j < obj.grounds.length; j++) {
      const ground = obj.grounds[j];
      console.log(`- ${ground.name} in ${ground.city}, capacity: ${ground.capacity}`);
    }
    console.log(); // Add an empty line for readability
  }
  })
  .catch((error) => {
    console.log(error);
  });
