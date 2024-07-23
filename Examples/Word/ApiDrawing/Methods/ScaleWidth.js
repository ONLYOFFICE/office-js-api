// This example scales the width of the figure using the specified coefficient.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
for (let i = 1; i < 4; i++ ){
	var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
	var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
	var oDrawing = Api.CreateShape("cube", 963295, 963295, oFill, oStroke);
	oParagraph.AddDrawing(oDrawing);
	oDrawing.ScaleWidth( i );
}
builder.SaveFile("docx", "ScaleWidth.docx");
builder.CloseFile();