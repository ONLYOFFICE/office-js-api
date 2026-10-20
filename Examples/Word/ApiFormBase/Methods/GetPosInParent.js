// Determine the index of a form within its parent element.

// The position is the form's index within its parent paragraph.

// Read a form's position within its paragraph and report it back.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Field: ");
let form = Api.CreateTextForm({ "key": "Name", "placeholder": "Enter text" });
paragraph.Push(form);
let position = form.GetPosInParent();
let report = Api.CreateParagraph();
report.AddText("The form is at position " + position + ".");
doc.Push(report);
