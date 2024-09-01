const { Router } = require("express");

const indexRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

indexRouter.get("/new", (req, res) => {
  res.render("form");
});

indexRouter.get("/details/:i", (req, res) => {
  const id = req.params.i;
  const messageDetails = messages[id];
  res.render("details", { messageDetails });
});

indexRouter.get("/", (req, res) => {
  res.render("index", { messages: messages });
});

indexRouter.post("/new", (req, res) => {
  messages.push({
    text: req.body.messageText,
    user: req.body.messageUser,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = indexRouter;
