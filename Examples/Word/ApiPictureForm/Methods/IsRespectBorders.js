// This example checks if the form border width is respected or not.
var oDocument = Api.GetDocument();
var oPictureForm = Api.CreatePictureForm({"key": "Personal information", "tip": "Upload your photo", "required": true, "placeholder": "Photo", "scaleFlag": "tooBig", "lockAspectRatio": true, "shiftX": 50, "shiftY": 50});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oPictureForm);
oPictureForm.SetImage("https://api.onlyoffice.com/content/img/docbuilder/examples/user-profile.png");
oPictureForm.SetRespectBorders(true);
var bRespectBorders = oPictureForm.IsRespectBorders();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The borders of the first picture form in this document are respected when scaling the image: " + bRespectBorders);
oDocument.Push(oParagraph);