// This example shows how to get the slide width in English measure units.

// How to find a slide's width and display it on the slide.

// Get a slide width and show it in the slide.

var oPresentation = Api.GetPresentation();
oPresentation.SetSizes(254 * 36000, 190 * 36000);
var oSlide = oPresentation.GetCurrentSlide();
oSlide.RemoveAllObjects();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("rect", 200 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
var oDocContent = oShape.GetDocContent();
var oParagraph = oDocContent.GetElement(0);
var nSlideWidth = oSlide.GetWidth();
oParagraph.AddText("The slide width = " + nSlideWidth / 36000 + " mm");
oSlide.AddObject(oShape);