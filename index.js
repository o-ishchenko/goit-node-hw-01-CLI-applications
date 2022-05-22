const contactsOperations = require("./contacts");
const argv = require("yargs").argv;

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const list = await contactsOperations.listContacts();
      console.log("listContacts", list);
      break;
    case "get":
      const contact = await contactsOperations.getContactById(id);
      console.log("getContactById", contact);
      break;
    case "add":
      const newContact = await contactsOperations.addContact(
        name,
        email,
        phone
      );
      console.log("newContact", newContact);
      break;
    case "remove":
      const removedContact = await contactsOperations.removeContact(id);
      console.log("removedContact", removedContact);
      break;
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(argv);
