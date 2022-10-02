const express = require("express");
const {
  getAllTransactions,
  createTransaction,
  //   getCustomer,
  //   createCustomer,
  //   deleteCustomer,
  //   updateCustomer,
} = require("../controllers/transactionController");
const router = express.Router();
const requireAuth = require("../middleware/requireAuth");
router.use(requireAuth);

router.get("/:customerId", getAllTransactions);
// router.get("/:id", getCustomer);
router.post("/", createTransaction);
// router.delete("/:id", deleteCustomer);
// router.delete("/:id", deleteCustomer);
// router.patch("/:id", updateCustomer);

module.exports = router;
