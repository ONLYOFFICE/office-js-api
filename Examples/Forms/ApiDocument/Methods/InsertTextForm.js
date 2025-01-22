// This example inserts a text box with the specified text box properties over the selected text.
let doc = editor.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("First name");
paragraph.Select();
doc.InsertTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "Name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false, "placeholderFromSelection": true, "keepSelectedTextInForm": false});