// This example sets the border color to the current form.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oPictureForm = Api.CreatePictureForm({"key": "Personal information", "tip": "Upload your photo", "required": true, "placeholder": "Photo", "scaleFlag": "tooBig", "lockAspectRatio": true, "respectBorders": false, "shiftX": 50, "shiftY": 50});
oPictureForm.SetImage("https://api.onlyoffice.com/content/img/docbuilder/examples/user-profile.png");
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oPictureForm);
oPictureForm.SetBorderColor(255, 111, 61);
builder.SaveFile("docx", "SetBorderColor.docx");
builder.CloseFile();