const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ msg: "All the currency data in the database" });
});
router.get("/:id", (req, res, next) => {
  try {
    const id = req.params.id;
    if (id === "sumip") throw new Error("Sumip string provided currency ");
    res.json({ msg: `we are adding currency ${id} from database` });
  } catch (e) {
    next(e);
  }
});
router.post("/", (req, res) => {
  res.json({ data: req.body, msg: `Posting  curr new data ` });
});
router.put("/:id", (req, res) => {
  const id = req.params.id;
  res.json({ data: req.body, msg: "Updating curr new data" });
});
router.patch("/:id", (req, res) => {
  const id = req.params.id;
  res.json({ data: req.body, msg: "Patching  curr new data" });
});
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  res.json({ msg: "Deleting curr new data" });
});
module.exports = router;
