// This example shows how to ungroup a group drawing element.
let oDocument = Api.GetDocument();
let oParagraph = oDocument.GetElement(0);
let oFill1 = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let oFill2 = Api.CreateSolidFill(Api.CreateRGBColor(111, 255, 61));
let oStroke = Api.CreateStroke(0, Api.CreateNoFill());
let oShape1 = Api.CreateShape("rect", 3212465, 963295, oFill1, oStroke);
let oShape2 = Api.CreateShape("rect", 1606232, 481647, oFill2, oStroke);
oShape1.SetWrappingStyle("inFront");
oShape2.SetWrappingStyle("inFront");
oShape2.SetHorPosition("page", 1606232);
oParagraph.AddDrawing(oShape1);
oParagraph.AddDrawing(oShape2);
let oGroup = oDocument.GroupDrawings([oShape1, oShape2]);
let oDocContent1 = oShape1.GetContent();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Shapes are ungrouped");
oDocContent1.AddElement(0, oParagraph);
let oDocContent2 = oShape2.GetContent();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Shapes are ungrouped");
oDocContent2.AddElement(0, oParagraph);
oGroup.Ungroup();
