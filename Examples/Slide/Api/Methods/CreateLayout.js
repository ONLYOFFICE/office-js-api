// This example shows how to create layout.
var oPresentation = Api.GetPresentation();
var oSlide1 = oPresentation.GetSlideByIndex(0);
var oMaster = oPresentation.GetMaster(0);
var oLayout = Api.CreateLayout(oMaster);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
oShape.SetSize(300 * 36000, 130 * 36000);
var oPlaceholder = Api.CreatePlaceholder("picture");
oShape.SetPlaceholder(oPlaceholder);
oLayout.AddObject(oShape);
oSlide1.ApplyLayout(oLayout);
var oSlide2 = Api.CreateSlide();
oPresentation.AddSlide(oSlide2);
oSlide2.ApplyLayout(oLayout);