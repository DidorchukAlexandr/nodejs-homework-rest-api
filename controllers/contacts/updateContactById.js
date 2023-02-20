const contactsOperations = require("../../models/contacts");
const createError = require("http-errors");

const updateContactById = async (req, res) => {
  const { contactId } = req.params;
  const updatedContact = await contactsOperations.updateContact(
    contactId,
    res.body
  );
  if (!updatedContact) {
    throw createError(404, `Contact with id ${contactId} not found`);
  }
  res.json({
    status: "succsess",
    code: 200,
    data: updatedContact,
  });
};

module.exports = updateContactById;
