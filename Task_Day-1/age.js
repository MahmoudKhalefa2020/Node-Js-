function getAge(name, birthdate) {
    try {
      const [year, month, day] = birthdate.split('-');
      const birthYear = parseInt(year);
      const currentYear = new Date().getFullYear();
      if (birthYear >= currentYear || year === '2023') {
        throw new Error('Invalid birth year');
      }
      const age = currentYear - birthYear;
      return `Hello ${name} and your age now is: ${age}`;
    }
    
     catch (error) {
      return 'Error: ' + error.message;
    }
  }
  
  module.exports = { getAge };
  