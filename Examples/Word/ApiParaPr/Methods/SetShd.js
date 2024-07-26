// This example specifies the shading applied to the contents of the paragraph.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oMyStyle = oDocument.CreateStyle("My document style");
var oParaPr = oMyStyle.GetParaPr();
oParaPr.SetShd("clear", 255, 111, 61, false);
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is an example of setting a shading to a paragraph.");
oParagraph.SetStyle(oMyStyle);
builder.SaveFile("docx", "SetShd.docx");
builder.CloseFile();