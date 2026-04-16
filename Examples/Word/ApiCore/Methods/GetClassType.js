// Check the class type returned by a core properties in a document.

// How do I check what type a core properties object is in a document?

// Retrieve and output the class type string for a core properties in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
const classType = core.GetClassType();

let paragraph = doc.GetElement(0);
paragraph.AddText("Class type: " + classType);