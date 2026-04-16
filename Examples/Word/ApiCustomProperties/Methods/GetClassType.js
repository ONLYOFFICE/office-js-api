// Retrieve the class type of a custom properties in a document.

// How to identify the class type of a custom properties in a document?

// Obtain the class type identifier of a custom properties object in a document.

const doc = Api.GetDocument();
const customProps = doc.GetCustomProperties();

const classType = customProps.GetClassType();
let paragraph = doc.GetElement(0);
paragraph.AddText("ApiCustomProperties class type: " + classType);