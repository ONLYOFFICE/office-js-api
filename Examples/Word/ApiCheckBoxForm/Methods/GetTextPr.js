// This example returns the text properties from the current form.
let doc = Api.GetDocument();
let checkBoxForm = Api.CreateCheckBoxForm({"tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": false});
checkBoxForm.SetFormKey("Marital status 1");
let paragraph = doc.GetElement(0);
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Married");
paragraph.AddLineBreak();
checkBoxForm = Api.CreateCheckBoxForm({"tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": false});
checkBoxForm.SetFormKey("Marital status 2");
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Single");
let textPr = Api.CreateTextPr();
textPr.SetFontSize(30);
textPr.SetBold(true);
checkBoxForm.SetTextPr(textPr);
let formTextPr = checkBoxForm.GetTextPr();
formTextPr.SetItalic(true);
checkBoxForm.SetTextPr(formTextPr);