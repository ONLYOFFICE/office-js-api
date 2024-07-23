// This example specifies that all the small letter characters in this paragraph are formatted for display only as their capital letter character equivalents which are two points smaller than the actual font size specified for this text.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is a paragraph with the font set to small capitalized letters.");
oParagraph.SetSmallCaps(true);
builder.SaveFile("docx", "SetSmallCaps.docx");
builder.CloseFile();