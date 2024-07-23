// This example checks if the current checkbox is a radio button.
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
var bRadioButton = oCheckBoxForm.IsRadioButton();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The second form from this document is a radio button: " + bRadioButton);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "IsRadioButton.docx");
builder.CloseFile();