const Bruger = require('./models/bruger'); // Replace with the correct path to bruger.js

// Example usage:
(async () => {
  try {
    // Creating a new Bruger entry
    const newBruger = await Bruger.create({
      name: 'John Doe',
      email: 'john.doe@example.com'
    });

    // Querying the Bruger model
    const foundBruger = await Bruger.findOne({
      where: { name: 'John Doe' }
    });

    console.log('Created Bruger:', newBruger.toJSON());
    console.log('Found Bruger:', foundBruger ? foundBruger.toJSON() : 'Not found');
  } catch (error) {
    console.error('Error:', error);
  }
})();