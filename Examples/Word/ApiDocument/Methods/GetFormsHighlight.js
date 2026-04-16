// Return the highlight color of the forms in the document.

// How to get the current highlight color of forms.

// Set a highlight color on the forms and retrieve it.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
doc.SetFormsHighlight(191, 219, 254);
let highlight = doc.GetFormsHighlight();
paragraph = Api.CreateParagraph();
paragraph.AddText("The forms highlight color is: " + highlight.GetHex());
doc.Push(paragraph);