// This example shows how to get all existing forms in the document.
var oDocument = Api.GetDocument();
var oTextForm = Api.CreateTextForm({"key": "Name", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oTextForm);
var oComboBoxForm = Api.CreateComboBoxForm({"key": "Country", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
oParagraph.AddLineBreak();
oParagraph.AddElement(oComboBoxForm);
var aForms = oDocument.GetAllForms();
aForms[0].SetText("John Smith");
aForms[1].SelectListValue("USA");