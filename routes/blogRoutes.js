const express = require("express");
const router = express.Router();
const pool = require("../db");

router.get("/", async (req, res) => {
  const result = await pool.query("SELECT * FROM blogs ORDER BY id DESC");
  res.render("index", { blogs: result.rows });
});

// create
router.get("/create", (req, res) => {
  res.render("create");
});

// CREATE BLOG
router.post("/create", async (req, res) => {
  const { title, content } = req.body;

  await pool.query("INSERT INTO blogs (title, content) VALUES ($1,$2)", [
    title,
    content,
  ]);

  res.redirect("/");
});

// EDIT PAGE
router.get("/edit/:id", async (req, res) => {
  const id = req.params.id;

  const result = await pool.query("SELECT * FROM blogs WHERE id=$1", [id]);

  res.render("edit", { blog: result.rows[0] });
});

// UPDATE BLOG
router.patch("/edit/:id", async (req, res) => {
  const id = req.params.id;
  const { title, content } = req.body;

  await pool.query("UPDATE blogs SET title=$1, content=$2 WHERE id=$3", [
    title,
    content,
    id,
  ]);

  res.redirect("/");
});

// DELETE BLOG
router.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;

  await pool.query("DELETE FROM blogs WHERE id=$1", [id]);

  res.redirect("/");
});

module.exports = router;
