const app = require("./app");
const dotenv = require("dotenv");

dotenv.config({ path: "" });

app.listen(process.env.PORT, () => {
  console.log("Adrit ki maa ki chut");
});
