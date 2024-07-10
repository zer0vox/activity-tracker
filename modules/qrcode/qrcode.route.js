const router = require("express").Router();
const QRController = require("./qrcode.controller");
router.get("/", (req, res) => {
  res.json({ msg: "All the qr data in the database" });
});
router.get("/:id", (req, res, next) => {
  try {
    const id = req.params.id;
    if (id === "sumip") throw new Error("Sumip string provided");
    res.json({ msg: `we are adding ${id} from database` });
  } catch (e) {
    next(e);
  }
});
router.post("/", async (req, res, next) => {
  try {
    const data = await QRController.createQr(req.body);
    res.json({ data: data, msg: `GeneratingQr code ` });
  } catch (e) {
    next(e);
  }
});
router.put("/:id", (req, res) => {
  const id = req.params.id;
  res.json({ data: req.body, msg: "Updating new data" });
});
router.patch("/:id", (req, res) => {
  const id = req.params.id;
  res.json({ data: req.body, msg: "Patching new data" });
});
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  res.json({ msg: "Deleting new data" });
});
module.exports = router;
