// Read the class type of the core properties object in a document.

// How do I find out what class type the core properties object belongs to in a document?

// Confirm the object identity before calling type-specific methods in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
const classType = core.GetClassType();

let paragraph = doc.GetElement(0);
paragraph.AddText("Class type: " + classType);