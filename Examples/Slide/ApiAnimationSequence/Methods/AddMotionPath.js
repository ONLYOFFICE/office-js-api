// Add a custom motion path effect to a shape in a presentation.

// The path is set in the SVG path syntax with the absolute slide coordinates, so the shape can move along any curve.

// Throw a ball along an arc from the left part of the slide to the right part.

let presentation = Api.GetPresentation();
let slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
let fill = Api.CreateSolidFill(Api.RGB(244, 67, 54));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let ball = Api.CreateShape("ellipse", 914400, 914400, fill, stroke);
ball.SetPosition(914400, 3657600);
slide.AddObject(ball);
let sequence = slide.GetTimeLine().GetMainSequence();
let effect = sequence.AddMotionPath(ball, "M 1371600 4114800 Q 4114800 914400 6858000 4114800", "afterprevious");
effect.SetDuration(2000);