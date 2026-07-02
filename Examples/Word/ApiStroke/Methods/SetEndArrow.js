// Add an arrowhead to the end of a shape border in a document.

// How do I set the ending arrow of a shape's outline in a document?

// Create a shape, retrieve its stroke, and apply a stealth arrow to the end of the border line in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 200, 100));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.CreateRGBColor(0, 0, 255)));
let shape = Api.CreateShape("line", 100 * 36000, 50 * 36000, fill, stroke);
paragraph.AddDrawing(shape);
let retrievedStroke = shape.GetLine();
let result = retrievedStroke.SetEndArrow("stealth", "medium", "large");
paragraph.AddText("End arrow set: " + result);
