// This example shows how to get the previous inline image if exists.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oImage1 = Api.CreateImage("https://api.onlyoffice.com/content/img/docbuilder/examples/coordinate_aspects.png", 60 * 36000, 35 * 36000);
oParagraph.AddDrawing(oImage1);
var oImage2 = Api.CreateImage("https://helpcenter.onlyoffice.com/images/Help/GettingStarted/Documents/big/EditDocument.png", 60 * 36000, 35 * 36000);
oParagraph.AddLineBreak();
oParagraph.AddDrawing(oImage2);
var oPrevImage = oImage2.GetPrevImage();
var oCopyImage = oPrevImage.Copy();
oParagraph.AddLineBreak();
oParagraph.AddDrawing(oCopyImage);
builder.SaveFile("docx", "GetPrevImage.docx");
builder.CloseFile();