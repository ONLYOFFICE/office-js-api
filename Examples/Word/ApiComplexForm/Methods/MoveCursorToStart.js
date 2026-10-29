// Move the cursor to the start of a complex form in a document.

// The cursor is placed inside the complex form. Use the MoveCursorOutside method to place it before or after the form.

// Place the cursor at the start of the email form that consists of a text form and a domain name.

let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm({"key": "Email", "tip": "Email", "placeholder": "Start to fill complex form"});
complexForm.Add(Api.CreateTextForm());
complexForm.Add("@onlyoffice.com");
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
complexForm.MoveCursorToStart();
