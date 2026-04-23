// Change the border style and color of a shape in a document.

// How do I customize the outline stroke around a shape in a document?

// Make a shape stand out by giving its border a specific thickness and color in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 200, 100));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("rect", 100 * 36000, 50 * 36000, fill, stroke);
paragraph.AddDrawing(shape);
paragraph.AddLineBreak();
paragraph.AddText("Original shape with no border");
paragraph.AddLineBreak();
let newStroke = Api.CreateStroke(3 * 12700, Api.CreateSolidFill(Api.CreateRGBColor(0, 0, 255)));
shape.SetLine(newStroke);
paragraph.AddText("Border changed to 3pt blue line");