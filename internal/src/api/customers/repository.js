const Books = require("./model");
const { filters } = require("../../utils");

const find = async ({ searchTerm }) => {
  let parameters = {};
  if (searchTerm) {
    const or_filters = filters(searchTerm);
    parameters.$and = [
      {
        $or: [
          { identification: or_filters },
          { firstName: or_filters },
          { middleName: or_filters },
          { lastName: or_filters },
          { career: or_filters }
        ]
      }
    ];
  }

  return Books.find({ ...parameters });
};

const findOne = ({ id }) => {
  return Books.findOne({ _id: id });
};

const save = ({
  firstName,
  middleName,
  lastName,
  career,
  identification,
  status
}) => {
  const newBook = new Books({
    firstName,
    middleName,
    lastName,
    career,
    identification,
    status
  });
  return newBook.save();
};

const update = (
  id,
  { firstName, middleName, lastName, career, identification, status }
) => {
  return Books.update(
    { _id: id },
    {
      $set: {
        firstName,
        middleName,
        lastName,
        career,
        identification,
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
