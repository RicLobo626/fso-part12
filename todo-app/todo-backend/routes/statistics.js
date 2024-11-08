const express = require("express");
const router = express.Router();
const { getAsync } = require("../redis");

router.get("/", async (_req, res) => {
  const addedTodos = await getAsync("added_todos");

  res.json({ added_todos: +addedTodos });
});

module.exports = router;
