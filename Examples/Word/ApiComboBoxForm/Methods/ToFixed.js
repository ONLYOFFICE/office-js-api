// This example converts the current form to a fixed size form.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oComboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oComboBoxForm);
oComboBoxForm.ToFixed(7 * 240, 2 * 240);
var bFixed = oComboBoxForm.IsFixed();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The first form from this document has a fixed size: " + bFixed);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "ToFixed.docx");
builder.CloseFile();