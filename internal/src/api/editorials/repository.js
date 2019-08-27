const Editorials = require("./model");

const find = async () => {
  return Editorials.find();
};

const save = ({ ...params }) => {
  const newBook = new Editorials(params);
  return newBook.save();
};

const update = (id, { name, code, status }) => {
  return Editorials.update(
    { _id: id },
    {
      $set: {
        name,
        code,
        status
      }
    }
  );
};

module.exports = {
  find,
  save,
  update
};
