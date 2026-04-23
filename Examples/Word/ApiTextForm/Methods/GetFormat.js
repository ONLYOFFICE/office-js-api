// Read the input format applied to a text field in a document.

// How do I check what format rule is set on a text entry area in a document?

// Confirm the mask or pattern controlling user input in a text field in a document.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({ key: "Code", placeholder: "Enter code" });
textForm.SetFormat({ type: "mask", value: "9-9-9" });
let format = textForm.GetFormat();
let paragraph = doc.GetElement(0);
paragraph.AddText("Text form format type: " + format.type + ", value: " + format.value);
paragraph.Push(textForm);