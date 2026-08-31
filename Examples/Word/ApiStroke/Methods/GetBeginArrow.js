// Read the beginning arrow of a shape border in a document.

// How do I find out which arrow is applied to the start of a shape's outline in a document?

// Apply a beginning arrow to a shape's stroke, then read back its type, width, and length in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 200, 100));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.CreateRGBColor(0, 0, 255)));
let shape = Api.CreateShape("line", 100 * 36000, 50 * 36000, fill, stroke);
paragraph.AddDrawing(shape);
let retrievedStroke = shape.GetLine();
retrievedStroke.SetBeginArrow("triangle", "medium", "large");
let arrow = retrievedStroke.GetBeginArrow();
paragraph.AddText("Begin arrow type: " + (arrow ? arrow.Type : "not set"));
