const errorHandler = (err, req, res, next) => {
  // Log to console for the developer
  console.log(err);

  res.status(err.statusCode || 500).json({
    success: false,
    error: err.message || 'Server error',
  });
};

module.exports = errorHandler;
