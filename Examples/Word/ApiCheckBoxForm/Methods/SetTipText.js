// This example sets the tip text to the current form.
var oDocument = Api.GetDocument();
var oCheckBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oCheckBoxForm);
oParagraph.AddText(" Married");
oParagraph.AddLineBreak();
oCheckBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true});
oParagraph.AddElement(oCheckBoxForm);
oParagraph.AddText(" Single");
oCheckBoxForm.SetTipText("Specify your marital status");
var sTipText = oCheckBoxForm.GetTipText();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Tip text: " + sTipText);
oDocument.Push(oParagraph);