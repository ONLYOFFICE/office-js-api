// This example returns the text properties from the current form.
let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm({"key": "Complex", "tip": "Insert here other forms", "required": true, "placeholder": "Complex form"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
let textPr = Api.CreateTextPr();
textPr.SetFontSize(30);
textPr.SetBold(true);
complexForm.SetTextPr(textPr);
let formTextPr = complexForm.GetTextPr();
formTextPr.SetItalic(true);
complexForm.SetTextPr(formTextPr);