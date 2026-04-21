// Create a blip fill to apply to the object using the selected image as the object background in a document.

// A shape with the "star10" type uses a tiled blip fill as its background.

// Create a blip fill with the specified image url and the "tile" fill type and use it to fill the created shape in the document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateBlipFill("https://static.onlyoffice.com/assets/docs/samples/img/presentation_sky.png", "tile");
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("star10", 5930900, 595605, fill, stroke);
paragraph.AddDrawing(shape);