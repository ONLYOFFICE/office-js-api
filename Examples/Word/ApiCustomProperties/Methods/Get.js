// Get the value of a custom property by its name in a document.

// Return null for properties that do not exist.

// Get for a custom properties in a document.

const doc = Api.GetDocument();
const customProps = doc.GetCustomProperties();

customProps.Add("ExistingProp", "#123456");

const existingProp = customProps.Get("ExistingProp");
const nonExistentProp = customProps.Get("NonExistentProp");

const paragraph = doc.GetElement(0);
paragraph.AddText("Existing Property Value: " + existingProp);
paragraph.AddText("\nNon-Existent Property Value: " + nonExistentProp);