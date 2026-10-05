// Access the element that directly contains a math equation in a presentation.

// The parent is the paragraph that directly contains the math equation.

// Navigate from a math equation up to its parent paragraph in a presentation and make it italic.

let presentation = Api.GetPresentation();
let slide = presentation.GetCurrentSlide();
let shape = Api.CreateShape("rect", 3000000, 1000000, null, null);
shape.SetPosition(0, 0);
slide.AddObject(shape);
let paragraph = shape.GetDocContent().GetElement(0);
paragraph.Select();
let math = presentation.GetMaths().Add("a^2 + b^2 = c^2");
let parent = math.GetParent();
parent.SetItalic(true);
