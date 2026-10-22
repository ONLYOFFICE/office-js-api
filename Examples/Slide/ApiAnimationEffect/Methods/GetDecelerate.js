// Get the smooth end of an animation effect in a presentation.

// A preset motion path decelerates to rest during the second half of its duration.

// Show the part of the duration during which a preset motion path decelerates.

let presentation = Api.GetPresentation();
let slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
let fill = Api.CreateSolidFill(Api.RGB(61, 74, 107));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("rect", 3657600, 914400, fill, stroke);
shape.SetPosition(914400, 914400);
slide.AddObject(shape);
let sequence = slide.GetTimeLine().GetMainSequence();
let effect = sequence.AddEffect(shape, "pathDown", "afterprevious");
let paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText("Smooth end: " + effect.GetDecelerate() * 100 + "% of the duration");