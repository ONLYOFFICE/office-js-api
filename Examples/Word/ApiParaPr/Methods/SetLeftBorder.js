// This example specifies the border which will be displayed at the left side of the page around the specified paragraph.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oMyStyle = oDocument.CreateStyle("My document style");
var oParaPr = oMyStyle.GetParaPr();
oParaPr.SetLeftBorder("single", 24, 0, 255, 111, 61);
var oParagraph = oDocument.GetElement(0);
oParagraph.SetStyle(oMyStyle);
oParagraph.AddText("This is the first paragraph. ");
oParagraph.AddText("The paragraph properties styled above set a border at its left side.");
builder.SaveFile("docx", "SetLeftBorder.docx");
builder.CloseFile();