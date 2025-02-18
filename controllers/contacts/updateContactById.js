const { Contact } = require("../../models");
const createError = require("http-errors");

const updateContactById = async (req, res) => {
  if (Object.keys(req.body).length === 0) {
    throw createError(400, "missing fields");
  }
  const { contactId } = req.params;
  const updatedContact = await Contact.findByIdAndUpdate(contactId, res.body, {
    new: true,
  });
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
