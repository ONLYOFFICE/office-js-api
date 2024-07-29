// This example specifies the shading applied to the contents of the current text run.
var oDocument = Api.GetDocument();
var oTextPr = oDocument.GetDefaultTextPr();
oTextPr.SetShd("clear", 255, 111, 61);
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("A sample text with the shading set to orange.");