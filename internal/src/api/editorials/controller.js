const Repository = require("./repository");

const get = async (req, res) => {
  try {
    const editorials = await Repository.find();
    return res.send(editorials);
  } catch (error) {
    next(error);
  }
};

const post = async (req, res) => {
  try {
    const { name, code, status } = req.body;
    await Repository.save({
      name,
      code,
      status
    });
    return res.send({ message: "Created!" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, code, status } = req.body;
    await Repository.update(id, {
      name,
      code,
      status
    });
    return res.send({ message: "Updated!" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  get,
  post,
  update
};
