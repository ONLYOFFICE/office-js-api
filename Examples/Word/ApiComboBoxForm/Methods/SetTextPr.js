// This example sets the text properties to the current form.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oComboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oComboBoxForm);
var oTextPr = Api.CreateTextPr();
oTextPr.SetFontSize(30);
oTextPr.SetBold(true);
oComboBoxForm.SetTextPr(oTextPr);
builder.SaveFile("docx", "SetTextPr.docx");
builder.CloseFile();