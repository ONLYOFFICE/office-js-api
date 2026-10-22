// Set the smooth end of an animation effect in a presentation.

// A ball rolls in at full speed and slows down before it stops.

// Make the motion of a ball start at full speed and decelerate to rest.

let presentation = Api.GetPresentation();
let slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
let fill = Api.CreateSolidFill(Api.RGB(67, 160, 71));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let ball = Api.CreateShape("ellipse", 914400, 914400, fill, stroke);
ball.SetPosition(457200, 3200400);
slide.AddObject(ball);
let sequence = slide.GetTimeLine().GetMainSequence();
let effect = sequence.AddMotionPath(ball, "M 914400 3657600 L 6858000 3657600", "afterprevious");
effect.SetDuration(3000);
effect.SetDecelerate(1);