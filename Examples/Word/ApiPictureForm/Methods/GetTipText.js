// This example shows how to get the tip text of the current form.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oPictureForm = Api.CreatePictureForm({"key": "Personal information", "tip": "Upload your photo", "required": true, "placeholder": "Photo", "scaleFlag": "tooBig", "lockAspectRatio": true, "respectBorders": false, "shiftX": 50, "shiftY": 50});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oPictureForm);
oPictureForm.SetImage("https://api.onlyoffice.com/content/img/docbuilder/examples/user-profile.png");
var sTipText = oPictureForm.GetTipText();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Form tip text: " + sTipText);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetTipText.docx");
builder.CloseFile();