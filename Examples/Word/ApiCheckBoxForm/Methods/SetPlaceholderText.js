// This example sets the placeholder text to the current form.
var oDocument = Api.GetDocument();
var oCheckBoxForm = Api.CreateCheckBoxForm({"tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": false});
oCheckBoxForm.SetFormKey("Marital status 1");
oCheckBoxForm.SetPlaceholderText("Form 1");
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oCheckBoxForm);
oParagraph.AddText(" Married");
oParagraph.AddLineBreak();
oCheckBoxForm = Api.CreateCheckBoxForm({"tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": false});
oCheckBoxForm.SetFormKey("Marital status 2");
oCheckBoxForm.SetPlaceholderText("Form 2");
oParagraph.AddElement(oCheckBoxForm);
oParagraph.AddText(" Single");
var sKey = oCheckBoxForm.GetFormKey();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Form key: " + sKey);
oDocument.Push(oParagraph);