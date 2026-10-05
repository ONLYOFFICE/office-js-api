// Identify the object type of the collection of equations in a presentation.

// Find out what kind of object the equations collection is in a presentation.

// Get the class type of the presentation's equations collection and report it.

let presentation = Api.GetPresentation();
let classType = presentation.GetMaths().GetClassType();
let slide = presentation.GetCurrentSlide();
let shape = Api.CreateShape("rect", 3000000, 1000000, null, null);
shape.SetPosition(0, 0);
slide.AddObject(shape);
shape.GetDocContent().GetElement(0).AddText("Class Type = " + classType);
