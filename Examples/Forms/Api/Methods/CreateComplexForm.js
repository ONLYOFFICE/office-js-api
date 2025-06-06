// This example creates a complex form with the common complex form properties.

// How to create a complex form and add it to the paragraph.

// Add a complex form with the state options to the ApiDocument object.

let doc = Api.GetDocument();
let comboBoxForm = Api.CreateComplexForm({"key": "Complex", "tip": "Insert here other forms", "required": true, "placeholder": "Complex form", "editable": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(comboBoxForm);