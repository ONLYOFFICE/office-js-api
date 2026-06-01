// Determine whether all sub-forms inside a complex form are filled in a document.

// How do I check if a complex form has been completely filled out in a document?

// Validate that a user has entered data in every required part of a form before submitting the document.

let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm({"key": "Email", "tip": "Enter your email", "placeholder": "Email"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
let textForm = Api.CreateTextForm({"placeholder" : "name"});
complexForm.Add(textForm);
complexForm.Add("@mail");
let filledBefore = complexForm.IsFilled();
textForm.SetText("john.smith");
let filledAfter = complexForm.IsFilled();
paragraph = Api.CreateParagraph();
paragraph.AddText("The complex form is filled before entering text: " + filledBefore);
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.AddText("The complex form is filled after entering text: " + filledAfter);
doc.Push(paragraph);