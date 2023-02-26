const { Contact } = require("../../models");

const getAllContacts = async (__, res) => {
  const contacts = await Contact.find({}, "-createdAt -updatedAt");
  res.json({ status: "succsess", code: 200, data: { contacts } });
};

module.exports = getAllContacts;
