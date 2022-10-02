const express = require("express");
const {
  getCustomers,
  getCustomer,
  createCustomer,
  deleteCustomer,
  updateCustomer,
} = require("../controllers/customerController");
const router = express.Router();
const requireAuth = require("../middleware/requireAuth");
router.use(requireAuth);

router.get("/", getCustomers);
router.get("/:id", getCustomer);
router.post("/", createCustomer);
router.delete("/:id", deleteCustomer);
router.delete("/:id", deleteCustomer);
router.patch("/:id", updateCustomer);

module.exports = router;
