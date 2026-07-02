// Add an arrowhead to the start of a shape border in a presentation.

// How do I set the beginning arrow of a shape's outline in a presentation?

// Create a shape, retrieve its stroke, and apply a triangle arrow to the start of the border line in a presentation.

let presentation = Api.GetPresentation();
let slide = presentation.GetSlideByIndex(0);
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 200, 100));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.CreateRGBColor(0, 0, 255)));
let shape = Api.CreateShape("rect", 100 * 36000, 50 * 36000, fill, stroke);
shape.SetPosition(2000000, 1000000);
slide.AddObject(shape);
let retrievedStroke = shape.GetLine();
let result = retrievedStroke.SetBeginArrow("triangle", "medium", "large");
let content = shape.GetDocContent();
let paragraph = content.GetElement(0);
paragraph.AddText("Begin arrow set: " + result);
