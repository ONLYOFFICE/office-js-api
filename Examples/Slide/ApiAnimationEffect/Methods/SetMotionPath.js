// Set a custom path to a motion path effect in a presentation.

// A preset motion path can be replaced with any path in the absolute slide coordinates.

// Replace the preset circle path of a heart with a zigzag and show the new effect type.

let presentation = Api.GetPresentation();
let slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
let fill = Api.CreateSolidFill(Api.RGB(233, 30, 99));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let heart = Api.CreateShape("heart", 914400, 914400, fill, stroke);
heart.SetPosition(914400, 2286000);
slide.AddObject(heart);
let sequence = slide.GetTimeLine().GetMainSequence();
let effect = sequence.AddEffect(heart, "pathCircle", "afterprevious");
effect.SetMotionPath("M 1371600 2743200 L 2743200 1828800 L 4114800 3657600 L 5486400 1828800 L 6858000 2743200");
let paragraph = heart.GetDocContent().GetElement(0);
paragraph.AddText(effect.GetEffectType());