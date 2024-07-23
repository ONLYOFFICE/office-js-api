// This example gets a type of ApiBullet class and inserts it into the document.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oBullet = Api.CreateBullet("- ");
var sType = oBullet.GetClassType();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("The ApiBullet class type: " + sType);
builder.SaveFile("docx", "GetClassType.docx");
builder.CloseFile();