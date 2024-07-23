// This example sets a key to the current form.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oComboBoxForm = Api.CreateComboBoxForm({"tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oComboBoxForm);
oComboBoxForm.SetFormKey("Personal information");
var sKey = oComboBoxForm.GetFormKey();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Form key: " + sKey);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "SetFormKey.docx");
builder.CloseFile();