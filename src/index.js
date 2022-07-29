const { urlencoded } = require("express");
const express = require("express");
const app = express();
const morgan = require("morgan");

//Setting
app.set('port',process.env.Port || 3000);

//mildware
app.use(morgan("dev"));
app.use(urlencoded({extended: false}));
app.use(express.json());

//routes
app.use(require("./routes/index"));
app.use("/api/movies",require("./routes/movies"));

//Startin de server
app.listen(app.get('port'),() =>  {
    console.log(`Listening on port ${app.get('port')}`);
});