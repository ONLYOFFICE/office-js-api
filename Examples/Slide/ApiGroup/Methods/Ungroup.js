// This example shows how to ugroup a group drawing element.
let oPresentation = Api.GetPresentation();
oPresentation.SetSizes(254 * 36000, 190 * 36000);
let oSlide = oPresentation.GetCurrentSlide();
oSlide.RemoveAllObjects();
let oFill1 = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let oFill2 = Api.CreateSolidFill(Api.CreateRGBColor(111, 255, 61));
let oStroke = Api.CreateStroke(0, Api.CreateNoFill());

let oShape1 = Api.CreateShape("flowChartOnlineStorage", 200 * 36000, 130 * 36000, oFill1, oStroke);
oShape1.SetPosition(608400, 1267200);
oSlide.AddObject(oShape1);

let oShape2 = Api.CreateShape("flowChartOnlineStorage", 100 * 36000, 65 * 36000, oFill2, oStroke);
oShape2.SetPosition(304200, 633600);
oSlide.AddObject(oShape2);

let oGroup = oSlide.GroupDrawings([oShape1, oShape2]);
oGroup.Ungroup();

let oDocContent1 = oShape1.GetDocContent();
let oParagraph1 = oDocContent1.GetElement(0);
oParagraph1.AddText("Shapes are ungrouped");

let oDocContent2 = oShape2.GetDocContent();
let oParagraph2 = oDocContent2.GetElement(0);
oParagraph2.AddText("Shapes are ungrouped");