// This example shows how to get the radio group key if the checkbox is a radio button.
var oDocument = Api.GetDocument();
var oCheckBoxForm = Api.CreateCheckBoxForm({"tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true});
oCheckBoxForm.SetRadioGroup("Marital status");
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oCheckBoxForm);
oParagraph.AddText(" Married");
oParagraph.AddLineBreak();
oCheckBoxForm = Api.CreateCheckBoxForm({"tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true});
oCheckBoxForm.SetRadioGroup("Marital status");
oParagraph.AddElement(oCheckBoxForm);
oParagraph.AddText(" Single");
var sRadioGroup = oCheckBoxForm.GetRadioGroup();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Radio group name of the radio buttons in this document: " + sRadioGroup);
oDocument.Push(oParagraph);