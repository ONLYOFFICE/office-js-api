// Fill a shape with an image in a PDF.

// How do I use an image as a fill in a PDF?

// Apply a repeating image pattern to a shape in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateBlipFill("https://static.onlyoffice.com/assets/docs/samples/img/presentation_sky.png", "tile");
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("star10", 150 * 36000, 65 * 36000, fill, stroke);
drawing.SetPosition(608400, 1267200);
page.AddObject(drawing);