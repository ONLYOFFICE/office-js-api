// Fill a shape with a predefined color scheme in a PDF.

// How do I use theme colors to fill a shape in a PDF?

// Apply a scheme color to a shape's background in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const schemeColor = Api.CreateSchemeColor("dk1");
const fill = Api.CreateSolidFill(schemeColor);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("curvedUpArrow", 150 * 36000, 65 * 36000, fill, stroke);
drawing.SetPosition(608400, 1267200);
page.AddObject(drawing);