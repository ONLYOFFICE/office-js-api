// This example shows how to set the format for a text field.

// Create a text form, set its format to accept digits only, and add it to the document.

// How to set the format of the ApiTextForm object.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({ key: "Phone", placeholder: "Enter digits" });
textForm.SetFormat({ type: "digit" });
let paragraph = doc.GetElement(0);
paragraph.AddText("Text form with digit format: ");
paragraph.Push(textForm);
