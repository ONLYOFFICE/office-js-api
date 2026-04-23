// Change the fill color of a shape from no fill to solid red.

// Create a rectangle with no fill and display the initial state.

// Apply a solid red fill and show the updated appearance.

let presentation = Api.GetPresentation();
let slide = presentation.GetSlideByIndex(0);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("rect", 100 * 36000, 50 * 36000, Api.CreateNoFill(), stroke);
shape.SetPosition(2000000, 1000000);
slide.AddObject(shape);
let content = shape.GetDocContent();
let paragraph = content.GetElement(0);
paragraph.AddText("Original shape with no fill");
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 0, 0));
shape.SetFill(fill);
paragraph.AddLineBreak();
paragraph.AddText("Fill changed to red");