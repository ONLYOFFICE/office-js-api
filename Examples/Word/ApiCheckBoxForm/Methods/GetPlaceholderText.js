// Read the placeholder text set on a checkbox form in a document.

// How do I retrieve the placeholder text of a checkbox form in a document?

// Verify the hint text shown inside an unfilled checkbox form before sharing a document.

let doc = Api.GetDocument();
let checkBoxForm = Api.CreateCheckBoxForm({"tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Married");
checkBoxForm.SetPlaceholderText("Marital status");
let placeholderText = checkBoxForm.GetPlaceholderText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Placeholder text: " + placeholderText);
doc.Push(paragraph);