/*const express = require("express");*/
/*const app = express();*/
import express from "express";
const PORT = 4000;

const app = express();

const handleHome = (req, res) => {
  return res.send("<h1>I still love you.</h1>");
};
const handleLogin = (req, res) => {
  return res.send("<h1>Login here.</h1>");
};

const handleContact = (req, res) => {
  return res.send("<h1>Contact here.</h1>");
};

const handleAbout = (req, res) => {
  return res.send("<h1>About here.</h1>");
};

app.get("/", handleHome);
app.get("/login", handleLogin);
app.get("/contact", handleContact);
app.get("/about", handleAbout);

const handleListening = () =>
  console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);
app.listen(PORT, handleListening);