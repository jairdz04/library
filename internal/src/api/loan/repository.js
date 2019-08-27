const Books = require("./model");
const { filters } = require("../../utils");

const find = async ({ searchTerm }) => {
  let parameters = {};
  if (searchTerm) {
    const or_filters = filters(searchTerm);
    parameters.$and = [
      {
        $or: [
          { isbn: or_filters },
          { name: or_filters },
          { code: or_filters },
          { author: or_filters },
          { editorial: or_filters }
        ]
      }
    ];
  }

  return Books.find({ ...parameters });
};

const findOne = ({ id }) => {
  return Books.findOne({ _id: id });
};

const save = ({ ...params }) => {
  const newBook = new Books(params);
  return newBook.save();
};

const update = (
  id,
  {
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
  }
) => {
  return Books.update(
    { _id: id },
    {
      $set: {
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
      }
    }
  );
};

module.exports = {
  find,
  findOne,
  save,
  update
};
