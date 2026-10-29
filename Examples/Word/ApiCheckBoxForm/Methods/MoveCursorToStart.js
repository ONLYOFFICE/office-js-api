// Move the cursor to the start of a checkbox form in a document.

// The cursor is placed inside the checkbox form. Use the MoveCursorOutside method to place it before or after the form.

// Place the cursor before the checkbox symbol.

let doc = Api.GetDocument();
let checkBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "placeholder": "Marital status", "radio": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Married");
checkBoxForm.SetChecked(true);
checkBoxForm.MoveCursorToStart();
