// Get the class type of the custom properties object in a document.

// How do I identify the type of a custom properties object at runtime in a document?

// Confirm the object type before calling type-specific methods on custom properties in a document.

const doc = Api.GetDocument();
const customProps = doc.GetCustomProperties();

const classType = customProps.GetClassType();
let paragraph = doc.GetElement(0);
paragraph.AddText("ApiCustomProperties class type: " + classType);