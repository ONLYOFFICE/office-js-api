// Duplicate a text input field and place the copy in a document.

// How do I create an identical second text field from an existing one in a document?

// Reproduce a text entry field so it can be reused elsewhere in a document.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
let copyTextForm = textForm.Copy();
paragraph.AddLineBreak();
paragraph.AddElement(copyTextForm);