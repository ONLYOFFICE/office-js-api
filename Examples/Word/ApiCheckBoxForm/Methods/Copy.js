// This example copies the form.
var oDocument = Api.GetDocument();
var oCheckBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oCheckBoxForm);
oParagraph.AddText(" Married");
var oCopyCheckBoxForm = oCheckBoxForm.Copy();
oParagraph.AddLineBreak();
oParagraph.AddElement(oCopyCheckBoxForm);
oParagraph.AddText(" Single");