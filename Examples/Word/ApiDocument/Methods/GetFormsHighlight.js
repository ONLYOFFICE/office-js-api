// Read back the highlight color applied to all form fields in a document.

// How do I retrieve the current form highlight color in a document?

// Confirm a highlight was applied correctly by displaying its hex value in a document.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
doc.SetFormsHighlight(191, 219, 254);
let highlight = doc.GetFormsHighlight();
paragraph = Api.CreateParagraph();
paragraph.AddText("The forms highlight color is: " + highlight.GetHex());
doc.Push(paragraph);