// This example selects the current graphic object.
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
var aAllDrawings = oSlide.GetAllDrawings();
if(aAllDrawings.length > 0)
{
	var oDrawing = aAllDrawings[0];
	oDrawing.Select();
}