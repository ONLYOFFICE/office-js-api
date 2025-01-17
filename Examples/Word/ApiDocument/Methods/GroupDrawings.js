// This example show how to create a group of drawings in document.
let oDoc = Api.GetDocument();
let oFill1 = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let oFill2 = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
let oStroke = Api.CreateStroke(0, Api.CreateNoFill());
let oShape1 = Api.CreateShape("rect", 150 * 36000, 65 * 36000, oFill1, oStroke);
let oShape2 = Api.CreateShape("rect", 75 * 36000, 40 * 36000, oFill2, oStroke);
oShape1.SetWrappingStyle("inFront");
oShape2.SetWrappingStyle("inFront");
let oPara = Api.CreateParagraph();
oPara.AddDrawing(oShape1);
oPara.AddDrawing(oShape2);
oDoc.Push(oPara);
oDoc.GroupDrawings([oShape1, oShape2]);