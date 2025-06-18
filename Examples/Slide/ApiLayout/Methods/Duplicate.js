// This example makes a duplicate of slide layout and applies it to another slide.

// How to create a duplicate of a slide layout.

// Apply the layout of one slide to another by duplicating it.

var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
var oMaster = oPresentation.GetMaster(0);
var oLayout = oMaster.GetLayout(0);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
oShape.SetSize(300 * 36000, 130 * 36000);
oLayout.AddObject(oShape);
oSlide = Api.CreateSlide();
oPresentation.AddSlide(oSlide);
var oDuplicateLayout = oLayout.Duplicate(1);
oSlide.ApplyLayout(oDuplicateLayout);