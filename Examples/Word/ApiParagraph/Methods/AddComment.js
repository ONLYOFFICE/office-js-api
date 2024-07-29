// This example adds a comment to the paragraph.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is just a sample paragraph.");
oParagraph.AddLineBreak();
oParagraph.AddText("The comment was added to this document.");
oParagraph.AddComment("comment", "Jane");