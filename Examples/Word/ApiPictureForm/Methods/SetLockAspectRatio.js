// This example locks the aspect ratio of the picture form.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oPictureForm = Api.CreatePictureForm({"key": "Personal information", "tip": "Upload your photo", "required": true, "placeholder": "Photo", "scaleFlag": "tooBig", "respectBorders": false, "shiftX": 50, "shiftY": 50});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oPictureForm);
oPictureForm.SetImage("https://api.onlyoffice.com/content/img/docbuilder/examples/user-profile.png");
oPictureForm.SetLockAspectRatio(true);
var bLock = oPictureForm.IsLockAspectRatio();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The aspect ratio of the first picture form in this document is locked: " + bLock);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "SetLockAspectRatio.docx");
builder.CloseFile();