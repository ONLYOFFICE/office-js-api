// Group multiple shapes together in a presentation.

// How do I combine shapes so they move as one unit in a presentation?

// Bundle selected shapes into a single object for coordinated movement in a presentation.

let presentation = Api.GetPresentation();
let slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
let fill1 = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let fill2 = Api.CreateSolidFill(Api.RGB(51, 51, 51));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape1 = Api.CreateShape("rect", 80 * 36000, 50 * 36000, fill1, stroke);
let shape2 = Api.CreateShape("rect", 60 * 36000, 40 * 36000, fill2, stroke);
shape1.SetPosition(20 * 36000, 30 * 36000);
shape2.SetPosition(130 * 36000, 70 * 36000);
let group = Api.CreateGroup([shape1, shape2]);
slide.AddObject(group);