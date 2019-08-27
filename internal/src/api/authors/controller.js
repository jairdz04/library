const Repository = require("./repository");

const get = async (req, res) => {
  try {
    const authors = await Repository.find();
    return res.send(authors);
  } catch (error) {
    next(error);
  }
};

const post = async (req, res) => {
  try {
    const { first_name, middle_name, last_name, status } = req.body;
    await Repository.save({
      first_name,
      middle_name,
      last_name,
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
    const { first_name, middle_name, last_name, status } = req.body;
    await Repository.update(id, {
      first_name,
      middle_name,
      last_name,
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
