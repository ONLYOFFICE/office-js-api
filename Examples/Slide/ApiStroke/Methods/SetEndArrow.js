// Add an arrowhead to the end of a shape border in a presentation.

// How do I set the ending arrow of a shape's outline in a presentation?

// Create a shape, retrieve its stroke, and apply a stealth arrow to the end of the border line in a presentation.

let presentation = Api.GetPresentation();
let slide = presentation.GetSlideByIndex(0);
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 200, 100));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.CreateRGBColor(0, 0, 255)));
let shape = Api.CreateShape("rect", 100 * 36000, 50 * 36000, fill, stroke);
shape.SetPosition(2000000, 1000000);
slide.AddObject(shape);
let retrievedStroke = shape.GetLine();
let result = retrievedStroke.SetEndArrow("stealth", "medium", "large");
let content = shape.GetDocContent();
let paragraph = content.GetElement(0);
paragraph.AddText("End arrow set: " + result);
