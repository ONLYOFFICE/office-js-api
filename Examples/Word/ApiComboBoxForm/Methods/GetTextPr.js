// This example returns the text properties from the current form.
var oDocument = Api.GetDocument();
var oComboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oComboBoxForm);
var oTextPr = Api.CreateTextPr();
oTextPr.SetFontSize(30);
oTextPr.SetBold(true);
oComboBoxForm.SetTextPr(oTextPr);
var oFormTextPr = oComboBoxForm.GetTextPr();
oFormTextPr.SetItalic(true);
oComboBoxForm.SetTextPr(oFormTextPr);