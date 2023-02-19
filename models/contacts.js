const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const contactPath = path.join(__dirname, "./contacts.json");

const listContacts = async () => {
  const data = JSON.parse(await fs.readFile(contactPath));
  return data;
};

const getContactById = async (contactId) => {
  const data = await listContacts();
  const contact = data.find((item) => item.id === contactId.toString());
  if (!contact) {
    return null;
  }
  return contact;
};

const removeContact = async (contactId) => {
  const data = await listContacts();
  const idx = data.findIndex((item) => item.id === contactId);
  if (idx === -1) {
    return null;
  }
  const [removeContact] = data.splice(idx, 1);
  await fs.writeFile(contactPath, JSON.stringify(data));
  return removeContact;
};

const addContact = async (body) => {
  const data = await listContacts();
  const newContact = { id: nanoid(), ...body };
  data.push(newContact);
  await fs.writeFile(contactPath, JSON.stringify(data));
  return newContact;
};

const updateContact = async (contactId, body) => {
  const data = await listContacts();
  const idx = data.findIndex((item) => item.id === contactId);
  if (idx === -1) {
    return null;
  }
  data[idx] = { id: contactId, ...body };
  await fs.writeFile(contactPath, JSON.stringify(data));
  return data[idx];
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
