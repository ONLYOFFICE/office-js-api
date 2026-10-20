// Set a square cap for the ends of a shape border in a document.

// Change the cap type to control how the stroke ends are drawn.

// Create a line, retrieve its stroke, apply the square cap type, and display the result in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 200, 100));
let stroke = Api.CreateStroke(8 * 12700, Api.CreateSolidFill(Api.RGB(0, 0, 255)));
let line = Api.CreateShape("line", 100 * 36000, 50 * 36000, fill, stroke);
paragraph.AddDrawing(line);
let retrievedStroke = line.GetLine();
let result = retrievedStroke.SetCapType("square");
paragraph.AddText("Cap type set: " + result);
