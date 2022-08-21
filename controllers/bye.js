exports.sayBye = (_req, res, _next) => {
  res.status(200).send("Goodbye, world!");
};
