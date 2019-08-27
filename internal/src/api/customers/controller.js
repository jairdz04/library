const Repository = require("./repository");

const get = async (req, res) => {
  try {
    const { searchTerm } = req.query;
    const customers = await Repository.find({ searchTerm });
    return res.send(customers);
  } catch (error) {
    next(error);
  }
};

const getOne = async (req, res) => {
  try {
    const { id } = req.params;
    const customer = await Repository.findOne({ id });
    return res.send(customer);
  } catch (error) {
    next(error);
  }
};

const post = async (req, res) => {
  try {
    const {
      firstName,
      middleName,
      lastName,
      career,
      identification,
      status
    } = req.body;
    await Repository.save({
      firstName,
      middleName,
      lastName,
      career,
      identification,
      status
    });
    return res.send({ message: "Created!" });
  } catch (error) {
      console.log(error)
    next(error);
  }
};

const udpate = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      career,
      identification,
      status
    } = req.body;
    await Repository.update(id, {
      name,
      career,
      identification,
      status
    });
    return res.send({ message: "Updated!" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  get,
  getOne,
  post,
  udpate
};
