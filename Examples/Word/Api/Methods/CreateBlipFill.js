// This example shows hot to create a blip fill to apply to the object using the selected image as the object background.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateBlipFill("https://static.onlyoffice.com/assets/docs/samples/img/presentation_sky.png", "tile");
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("star10", 5930900, 595605, fill, stroke);
paragraph.AddDrawing(shape);