// Move the cursor to the start of a text form in a document.

// The cursor is placed inside the text form. Use the MoveCursorOutside method to place it before or after the form.

// Place the cursor before the first character of the text form value.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "placeholder": "First name"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.SetText("The cursor will be placed at the start of the current text form.");
textForm.MoveCursorToStart();
