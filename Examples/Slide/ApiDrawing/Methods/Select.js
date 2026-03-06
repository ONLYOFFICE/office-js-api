// This example selects the current graphic object.

// How to select drawing objects of the slide.

// Create three shapes, select the first one,
// then select the second shape with isReplace=true (replacing the selection),
// and finally select the third shape without isReplace parameter (adding to selection).

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const fill1 = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke1 = Api.CreateStroke(0, Api.CreateNoFill());
const drawing1 = Api.CreateShape("rect", 3212465, 963295, fill1, stroke1);
slide.AddObject(drawing1);
drawing1.SetPosition(0, 0);
const fill2 = Api.CreateSolidFill(Api.RGB(51, 133, 255));
const stroke2 = Api.CreateStroke(0, Api.CreateNoFill());
const drawing2 = Api.CreateShape("rect", 3212465, 963295, fill2, stroke2);
slide.AddObject(drawing2);
drawing2.SetPosition(4000000, 0);
const fill3 = Api.CreateSolidFill(Api.RGB(61, 255, 111));
const stroke3 = Api.CreateStroke(0, Api.CreateNoFill());
const drawing3 = Api.CreateShape("rect", 3212465, 963295, fill3, stroke3);
slide.AddObject(drawing3);
drawing3.SetPosition(8000000, 0);
drawing1.Select(true);
drawing2.Select(true);
drawing3.Select();
