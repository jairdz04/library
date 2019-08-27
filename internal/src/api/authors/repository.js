const Authors = require("./model");

const find = async () => {
  return Authors.find();
};

const save = ({ ...params }) => {
  const newBook = new Authors(params);
  return newBook.save();
};

const update = (id, { first_name, middle_name, last_name, status }) => {
  return Authors.update(
    { _id: id },
    {
      $set: {
        first_name,
        middle_name,
        last_name,
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
