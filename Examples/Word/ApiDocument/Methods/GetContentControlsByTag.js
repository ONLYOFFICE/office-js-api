// This example shows how to get a list of all content controls in the document with the specified tag name.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oInlineLvlSdt = Api.CreateInlineLvlSdt();
oParagraph.AddInlineLvlSdt(oInlineLvlSdt);
oInlineLvlSdt.AddText("Inline content control");
oInlineLvlSdt.SetTag("Tag 1");
var oBlockLvlSdt = Api.CreateBlockLvlSdt();
oBlockLvlSdt.GetContent().GetElement(0).AddText("Block text content control");
oBlockLvlSdt.SetTag("Tag 2");
oDocument.AddElement(0, oBlockLvlSdt);
var aContentControls = oDocument.GetContentControlsByTag("Tag 1");
aContentControls[0].SetAlias("№1");