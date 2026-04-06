// This example checks whether the complex form is filled.

// How to check if all sub-forms inside a complex form are filled.

// Create a complex form with a text sub-form and an uneditable "@mail" part, fill the text sub-form, and verify the complex form is filled.

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
