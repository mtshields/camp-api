const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load env variables
dotenv.config({ path: './config/config.env' });

// Load models
const Bootcamp = require('./models/Bootcamp');

// Connect to database
mongoose.connect(process.env.MONGOOSE_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

// Read JSON files
const bootcamps = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/bootcamps.json`, 'utf-8')
);

// Import data into database
const importData = async () => {
  try {
    await Bootcamp.create(bootcamps);
    console.log('Data imported to database...');
    process.exit();
  } catch (error) {
    console.error(error);
  }
};

// Delete data
const deleteData = async () => {
  try {
    await Bootcamp.deleteMany();
    console.log('Data deleted from database...');
    process.exit();
  } catch (error) {
    console.error(error);
  }
};

if (process.argv[2] === '-i') {
  importData();
} else if (process.argv[2] === '-d') {
  deleteData();
}
