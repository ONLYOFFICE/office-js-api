// Access the presentation that owns the collection of equations.

// The parent of the equations collection is the presentation itself.

// Get the equations collection's parent presentation and confirm it is the same presentation instance.

let presentation = Api.GetPresentation();
let maths = presentation.GetMaths();
let parent = maths.GetParent();
let slide = presentation.GetCurrentSlide();
let shape = Api.CreateShape("rect", 3000000, 1000000, null, null);
shape.SetPosition(0, 0);
slide.AddObject(shape);
shape.GetDocContent().GetElement(0).AddText("Parent is presentation: " + (parent === presentation));
