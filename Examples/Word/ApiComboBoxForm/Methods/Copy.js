// This example copies the form.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oComboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oComboBoxForm);
var oCopyComboBoxForm = oComboBoxForm.Copy();
oParagraph.AddLineBreak();
oParagraph.AddElement(oCopyComboBoxForm);
builder.SaveFile("docx", "Copy.docx");
builder.CloseFile();