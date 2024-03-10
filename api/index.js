const app = require("./app");
const dotenv = require("dotenv");

dotenv.config({ path: "" });

app.get("/", (req, res) => res.send("Express on Vercel"));

app.listen(process.env.PORT, () => console.log("Server ready on port."));
