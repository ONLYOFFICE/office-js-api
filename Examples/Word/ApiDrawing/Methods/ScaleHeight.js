// This example scales the height of the figure using the specified coefficient.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
for (let i = 3; i > 0; i-- ){
	var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
	var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
	var oDrawing = Api.CreateShape("cube", 3212465, 963295, oFill, oStroke);
	oParagraph.AddDrawing(oDrawing);
	oDrawing.ScaleHeight( i );
}