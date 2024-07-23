// This example checks if the current form is required.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oCheckBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "placeholder": "Marital status", "radio": true});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oCheckBoxForm);
oParagraph.AddText(" Married");
oParagraph.AddLineBreak();
oCheckBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "placeholder": "Marital status", "radio": true});
oParagraph.AddElement(oCheckBoxForm);
oParagraph.AddText(" Single");
oCheckBoxForm.SetRequired(true);
var bRequired = oCheckBoxForm.IsRequired();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The second form from this document is required: " + bRequired);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "IsRequired.docx");
builder.CloseFile();