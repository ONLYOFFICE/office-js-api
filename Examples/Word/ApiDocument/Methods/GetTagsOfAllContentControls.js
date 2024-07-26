// This example shows how to get a list of all tags that are used for all content controls in the document.
builder.CreateFile("docx");
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
var aTags = oDocument.GetTagsOfAllContentControls();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Content controls tags: ");
oParagraph.AddLineBreak();
for (let i = 0; i < aTags.length; i++ ){
	oParagraph.AddText(aTags[i]);
	oParagraph.AddLineBreak();
}
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetTagsOfAllContentControls.docx");
builder.CloseFile();