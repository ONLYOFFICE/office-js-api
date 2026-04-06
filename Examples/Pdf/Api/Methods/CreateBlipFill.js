// This example shows how to create a blip fill to apply to the object using the selected image as the object background.

// How to set an image as a background.

// Use blip fill to fill a background with an image.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateBlipFill("https://static.onlyoffice.com/assets/docs/samples/img/presentation_sky.png", "tile");
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("star10", 150 * 36000, 65 * 36000, fill, stroke);
drawing.SetPosition(608400, 1267200);
page.AddObject(drawing);
