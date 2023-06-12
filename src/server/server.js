const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

// const PORT = process.env.PORT || 5000;
const PORT = 8000;
app.use(cors());
app.use(express.json());
app.use(require("./routes/lorAPICalls"));

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})