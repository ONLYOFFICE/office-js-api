// Get the internal identifier of a drawing in a PDF.

// How do I retrieve a drawing object's internal ID?

// Create a shape and print its internal ID.

const doc = Api.GetDocument();
const page = doc.GetPage(0);
const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("rect", 100 * 36000, 60 * 36000, fill, stroke);
drawing.SetPosition(608400, 1267200);
page.AddObject(drawing);

console.log(`Drawing internal ID is: ${drawing.GetInternalId()}`);
