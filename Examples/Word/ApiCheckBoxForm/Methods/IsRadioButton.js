// Detect whether a checkbox form behaves as a radio button in a document.

// How do I find out if a checkbox form is a radio button in a document?

// Distinguish a radio-style form from a standard checkbox by reading its type in a document.

let doc = Api.GetDocument();
let checkBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true});
let paragraph = doc.GetElement(0);
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Married");
paragraph.AddLineBreak();
checkBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true});
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Single");
let radioButton = checkBoxForm.IsRadioButton();
paragraph = Api.CreateParagraph();
paragraph.AddText("The second form from this document is a radio button: " + radioButton);
doc.Push(paragraph);