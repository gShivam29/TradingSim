// getting-started.js
const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    ""
  );

  try {
    // Drop the "sample_airbnb" collection
    console.log("connection successful")
  } catch (err) {
    console.log('erorr ', err);
  } finally {
    // Close the connecti
    await mongoose.connection.close();
    console.log('Connection closed.');
  }
}
