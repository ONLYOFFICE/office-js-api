// This example shows how to get the state of the checkbox.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oCheckBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oCheckBoxForm);
oParagraph.AddText(" Married");
oParagraph.AddLineBreak();
oCheckBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true});
oParagraph.AddElement(oCheckBoxForm);
oParagraph.AddText(" Single");
oCheckBoxForm.SetChecked(true);
var bChecked = oCheckBoxForm.IsChecked();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The second radio button from this document is checked: " + bChecked);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "IsChecked.docx");
builder.CloseFile();