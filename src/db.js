// getting-started.js
const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    "mongodb+srv://shivam:ITFru64e65Ce5VQO@cluster0.x6m7u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
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
