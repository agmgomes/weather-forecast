class ErrorHandler extends Error {
  constructor(status, msg) {
    super();
    this.status = status;
    this.msg = msg;
  }
}

const handleError = (err, res) => {
  const { status, msg } = err;
  res.status(status).json({
    status,
    msg
  });
};

module.exports = {
  ErrorHandler,
  handleError
};
