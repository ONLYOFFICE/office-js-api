// This example shows how to group drawings on master slide.

// How to group drawings on master slide.

// Create two shapes and group them. on master slide

let oPresentation = Api.GetPresentation();
let oSlide = oPresentation.GetSlideByIndex(0);
let oLayout = oSlide.GetLayout();
let oMaster = oLayout.GetMaster();
let oFill1 = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let oFill2 = Api.CreateSolidFill(Api.CreateRGBColor(111, 255, 61));
let oStroke = Api.CreateStroke(0, Api.CreateNoFill());
let oShape1 = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 60 * 36000, oFill1, oStroke);
let oShape2 = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 60 * 36000, oFill2, oStroke);
oShape1.SetPosition(608400, 1267200);
oShape2.SetPosition(608400, 1400000);
oMaster.AddObject(oShape1);
oMaster.AddObject(oShape2);
oMaster.GroupDrawings([oShape1, oShape2]);