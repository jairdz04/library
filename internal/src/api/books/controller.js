const Repository = require("./repository");

const get = async (req, res) => {
  try {
    const { searchTerm } = req.query;
    const books = await Repository.find({ searchTerm });
    return res.send(books);
  } catch (error) {
    next(error);
  }
};

const getOne = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Repository.findOne({ id });
    return res.send(book);
  } catch (error) {
    next(error);
  }
};

const post = async (req, res) => {
  try {
    const {
      isbn,
      name,
      code,
      author,
      year,
      edition,
      editorial,
      description,
      quantity,
      status
    } = req.body;
    await Repository.save({
      isbn,
      name,
      code,
      author,
      year,
      edition,
      editorial,
      description,
      quantity,
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
      isbn,
      name,
      code,
      author,
      year,
      edition,
      editorial,
      description,
      quantity,
      status
    } = req.body;
    await Repository.update(id, {
      isbn,
      name,
      code,
      author,
      year,
      edition,
      editorial,
      description,
      quantity,
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
