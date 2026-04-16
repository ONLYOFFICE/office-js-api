// Find out the class type of a custom properties object in a document.

// How can I get the class type of a custom properties in a document?

// Get the class type of a custom properties and display it in the document.

const doc = Api.GetDocument();
const customProps = doc.GetCustomProperties();

const classType = customProps.GetClassType();
let paragraph = doc.GetElement(0);
paragraph.AddText("ApiCustomProperties class type: " + classType);