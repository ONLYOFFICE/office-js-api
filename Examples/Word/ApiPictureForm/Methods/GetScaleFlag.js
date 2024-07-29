// This example shows how to get the current scaling condition of the picture form.
var oDocument = Api.GetDocument();
var oPictureForm = Api.CreatePictureForm({"key": "Personal information", "tip": "Upload your photo", "required": true, "placeholder": "Photo", "scaleFlag": "tooBig", "lockAspectRatio": true, "respectBorders": false, "shiftX": 50, "shiftY": 50});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oPictureForm);
oPictureForm.SetImage("https://api.onlyoffice.com/content/img/docbuilder/examples/user-profile.png");
var sScaleFlag = oPictureForm.GetScaleFlag();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Picture scale flag: " + sScaleFlag);
oDocument.Push(oParagraph);