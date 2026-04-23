// Change the outline of a shape from no border to a thick blue line.

// Create a rectangle with no stroke and display the initial state.

// Apply a 3-point blue line and show the updated appearance.

let presentation = Api.GetPresentation();
let slide = presentation.GetSlideByIndex(0);
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 200, 100));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("rect", 100 * 36000, 50 * 36000, fill, stroke);
shape.SetPosition(2000000, 1000000);
slide.AddObject(shape);
let content = shape.GetDocContent();
let paragraph = content.GetElement(0);
paragraph.AddText("Original shape with no border");
let newStroke = Api.CreateStroke(3 * 12700, Api.CreateSolidFill(Api.CreateRGBColor(0, 0, 255)));
shape.SetLine(newStroke);
paragraph.AddLineBreak();
paragraph.AddText("Border changed to 3pt blue line");