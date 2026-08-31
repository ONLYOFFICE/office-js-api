// Select one or more drawing objects on a page in a PDF form.

// Combine replace mode and additive mode to control which shapes stay selected.

// Create three shapes, replace the selection with each of the first two, then add the third to it.

const doc = Api.GetDocument();
const page = doc.GetPage(0);
const fill1 = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke1 = Api.CreateStroke(0, Api.CreateNoFill());
const drawing1 = Api.CreateShape("rect", 60 * 36000, 35 * 36000, fill1, stroke1);
page.AddObject(drawing1);
drawing1.SetPosition(0, 0);
const fill2 = Api.CreateSolidFill(Api.RGB(51, 133, 255));
const stroke2 = Api.CreateStroke(0, Api.CreateNoFill());
const drawing2 = Api.CreateShape("rect", 60 * 36000, 35 * 36000, fill2, stroke2);
page.AddObject(drawing2);
drawing2.SetPosition(70 * 36000, 0);
const fill3 = Api.CreateSolidFill(Api.RGB(61, 255, 111));
const stroke3 = Api.CreateStroke(0, Api.CreateNoFill());
const drawing3 = Api.CreateShape("rect", 60 * 36000, 35 * 36000, fill3, stroke3);
page.AddObject(drawing3);
drawing3.SetPosition(140 * 36000, 0);
drawing1.Select(true);
drawing2.Select(true);
drawing3.Select();