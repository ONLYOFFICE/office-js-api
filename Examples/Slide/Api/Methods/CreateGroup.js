// This example show how to create a group.

// How to create a group of drawings.

// Group the specified list of shapes.

let oPresentation = Api.GetPresentation();
let oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
let oFill1 = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let oFill2 = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
let oStroke = Api.CreateStroke(0, Api.CreateNoFill());
let oShape1 = Api.CreateShape("rect", 300 * 36000, 130 * 36000, oFill1, oStroke);
let oShape2 = Api.CreateShape("rect", 150 * 36000, 80 * 36000, oFill2, oStroke);
oShape1.SetPosition(608400, 1267200);
oShape2.SetPosition(3100000, 1867200);
let oGroup = Api.CreateGroup([oShape1, oShape2]);
oSlide.AddObject(oGroup);