const mongoose = require('mongoose');

const uri = process.env.DATABASE;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true,
  // useFindAndModify: false,
}).then(() => {
  console.log(`connection successful`);
}).catch((err) => console.log(`No connection`));
// useNewUrlParser: true,
// useUnifiedTopology: true,