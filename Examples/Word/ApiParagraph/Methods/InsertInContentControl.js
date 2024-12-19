// This example wraps the paragraph object with a rich text content control.
var oDocument = Api.GetDocument();
var oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is a paragraph inserted into the content control.");
var oBlockLvlSdt = oParagraph.InsertInContentControl();
oDocument.AddElement(0, oBlockLvlSdt);