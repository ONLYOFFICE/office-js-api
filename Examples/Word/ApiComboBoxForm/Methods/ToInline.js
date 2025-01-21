// This example converts the form to an inline form.
let document = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
let paragraph = document.GetElement(0);
paragraph.AddElement(comboBoxForm);
comboBoxForm.ToFixed(7 * 240, 2 * 240);
let copyForm = comboBoxForm.Copy();
paragraph = Api.CreateParagraph();
paragraph.AddElement(copyForm);
document.Push(paragraph);
copyForm.ToInline();
let isFixed = comboBoxForm.IsFixed();
let isFixedCopy = copyForm.IsFixed();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first form from this document has a fixed size: " + isFixed);
paragraph.AddLineBreak();
paragraph.AddText("The second form from this document has a fixed size: " + isFixedCopy);
document.Push(paragraph);