import express from "express";
const PORT = 4000;

const app = express();


const urlLogger = (req, res, next) => {
  console.log(`Path: ${req.path}`);
  next();
}

const timeLogger = (req, res, next) => {
  const date = new Date();
  console.log(`Time: ${date.getFullYear()}.${date.getMonth()+1}.${date.getDate()}`);
  next();
}

const securityLogger = (req, res, next) => {
  if (req.protocol === "https") {
    console.log("secure")
  } else {
    console.log("insecure")
  }
  next();
}

const protectorLogger = (req, res, next) => {
  if (req.path === "/protected") {
    res.send("you can't go there")
  }
  next();
}

const handleHome = (req, res) => {
  return res.send("I love middlewares");
};

app.use(urlLogger, timeLogger, securityLogger, protectorLogger);
app.get("/", handleHome);

const handleListening = () =>
  console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);
app.listen(PORT, handleListening);