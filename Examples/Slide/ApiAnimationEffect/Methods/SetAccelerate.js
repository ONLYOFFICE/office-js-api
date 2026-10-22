// Set the smooth start of an animation effect in a presentation.

// A car starts slowly and speeds up during the whole motion.

// Make the motion of a car accelerate from rest to the end of the effect.

let presentation = Api.GetPresentation();
let slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
let fill = Api.CreateSolidFill(Api.RGB(30, 136, 229));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let car = Api.CreateShape("roundRect", 1371600, 685800, fill, stroke);
car.SetPosition(457200, 3200400);
slide.AddObject(car);
let sequence = slide.GetTimeLine().GetMainSequence();
let effect = sequence.AddMotionPath(car, "M 1143000 3543300 L 7315200 3543300", "afterprevious");
effect.SetDuration(3000);
effect.SetAccelerate(1);