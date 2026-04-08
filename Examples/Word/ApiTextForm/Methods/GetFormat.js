// This example shows how to get the format of a text field.

// Create a text form, set a mask format, then retrieve and display the format type.

// How to get the format of the ApiTextForm object.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({ key: "Code", placeholder: "Enter code" });
textForm.SetFormat({ type: "mask", value: "9-9-9" });
let format = textForm.GetFormat();
let paragraph = doc.GetElement(0);
paragraph.AddText("Text form format type: " + format.type + ", value: " + format.value);
paragraph.Push(textForm);
