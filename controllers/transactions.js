/**
 * @desc Add transactions
 * @route POST /api/v1/transactions
 * @access public
 */

exports.addTransaction = (req, res, next) => {
  res.send("POST transactions");
};

/**
 * @desc Delete transactions
 * @route POST /api/v1/transactions/:id
 * @access public
 */

exports.deleteTransaction = (req, res, next) => {
  res.send("DELETE transactions");
};

/**
 * @desc Get all transactions
 * @route GET /api/v1/transactions
 * @access public
 */

exports.getTransactions = (req, res, next) => {
  res.send("GET transactions");
};
