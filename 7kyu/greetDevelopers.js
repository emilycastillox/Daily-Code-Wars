/*
Instructions:

You will be given an array of objects (associative arrays in PHP, tables in COBOL) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return an array where each object will have a new property 'greeting' with the following string value:

Hi < firstName here >, what do you like the most about < language here >?

For example, given the following input array:


[
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
    greeting: 'Hi Sofia, what do you like the most about Java?'
  },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python',
    greeting: 'Hi Lukas, what do you like the most about Python?'
  },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby',
    greeting: 'Hi Madison, what do you like the most about Ruby?'
  } 
];

*/



  function greetDevelopers(list) {
   return list.map(el => ({
        firstName: el.firstName,
        lastName: el.lastName,
        country: el.country,
        continent: el.continent,
        age: el.age,
        language: el.language,
        greeting: `Hi ${el.firstName}, what do you like the most about ${el.language}?`
      }));
  }

// other solution using for of - travora's

  function greetDevelopers(list) {
    for (obj of list) {
      obj.greeting = `Hi ${obj.firstName}, what do you like the most about ${obj.language}?`
    }
    return list
  }

  // spread syntax

  const greetDevelopers = list => list.map(
    dev => ({...dev, greeting: `Hi ${dev.firstName}, what do you like the most about ${dev.language}?`})
  );

  // object assign correct

  const greetDevelopers = persons => persons.map(p => Object.assign(p, {greeting: `Hi ${p.firstName}, what do you like the most about ${p.language}?`}));


  // console logging correct thing but not returning the actual correct thing?

  function greetDevelopers(list) {
    let newArr = list.forEach(el => {
      Object.assign(list, { greeting: `Hi ${el.firstName}, what do you like the most about ${el.language}?` 
    })
   return newArr
})
}
