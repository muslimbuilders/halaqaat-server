const errorHandler = (err, req, res, next) => {
  res.status(err.statusCode).json({ success: false, err: err.message });
};

export { errorHandler };
