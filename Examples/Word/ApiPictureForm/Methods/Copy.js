// This example copies the form.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oPictureForm = Api.CreatePictureForm({"key": "Personal information", "tip": "Upload your photo", "required": true, "placeholder": "Photo", "scaleFlag": "tooBig", "lockAspectRatio": true, "respectBorders": false, "shiftX": 50, "shiftY": 50});
oPictureForm.SetImage("https://api.onlyoffice.com/content/img/docbuilder/examples/user-profile.png");
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oPictureForm);
var oCopyPictureForm = oPictureForm.Copy();
oParagraph.AddLineBreak();
oParagraph.AddElement(oCopyPictureForm);
builder.SaveFile("docx", "Copy.docx");
builder.CloseFile();