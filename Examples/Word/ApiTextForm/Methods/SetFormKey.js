// This example sets a key to the current form.
var oDocument = Api.GetDocument();
var oTextForm = Api.CreateTextForm({"tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oTextForm);
oTextForm.SetFormKey("Personal information");
var sKey = oTextForm.GetFormKey();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Form key: " + sKey);
oDocument.Push(oParagraph);