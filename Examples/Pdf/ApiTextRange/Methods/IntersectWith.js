// Intersect two overlapping text ranges and return their common part.

// Useful for finding the shared portion between two selections.

// Create two partially overlapping ranges and get their intersection.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 180 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
docContent.GetElement(0).AddText("Hello World");
page.AddObject(shape);

const range = shape.GetTextRange();
const range1 = range.GetRange(0, 7);
const range2 = range.GetRange(5, 11);

const intersection = range1.IntersectWith(range2);

const fill2 = Api.CreateSolidFill(Api.RGB(200, 230, 255));
const shape2 = Api.CreateShape("rect", 180 * 36000, 80 * 36000, fill2, stroke);
shape2.SetPosition(608400, 6000000);
shape2.GetDocContent().GetElement(0).AddText("Intersection: " + JSON.stringify(intersection.GetText()));
page.AddObject(shape2);
