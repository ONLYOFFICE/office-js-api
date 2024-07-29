// This example shows how to get a type of the form.
var oDocument = Api.GetDocument();
var oComboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oComboBoxForm);
var sFormType = oComboBoxForm.GetFormType();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Form type: " + sFormType);
oDocument.Push(oParagraph);