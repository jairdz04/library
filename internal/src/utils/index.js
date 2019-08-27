const filters = term => {
  return { $regex: new RegExp(term), $options: "i" };
};

module.exports = {
  filters
};
