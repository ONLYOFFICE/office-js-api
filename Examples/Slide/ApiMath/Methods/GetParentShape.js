// Access the shape that contains a math equation in a presentation.

// The shape can be adjusted right after the equation is added.

// Add an equation to a shape and move the shape that contains it.

let presentation = Api.GetPresentation();
let slide = presentation.GetCurrentSlide();
let shape = Api.CreateShape("rect", 3000000, 1000000, null, null);
slide.AddObject(shape);
let paragraph = shape.GetDocContent().GetElement(0);
paragraph.Select();
let math = presentation.GetMaths().Add("a^2 + b^2 = c^2");
math.GetParentShape().SetPosition(1000000, 1000000);
