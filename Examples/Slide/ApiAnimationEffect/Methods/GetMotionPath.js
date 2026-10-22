// Get the motion path of an animation effect in a presentation.

// The path is returned in the absolute slide coordinates, so the next motion path can start where the previous one ends.

// Move a star to the right with a preset path, then move it down from the end point of that path.

let presentation = Api.GetPresentation();
let slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
let fill = Api.CreateSolidFill(Api.RGB(255, 193, 7));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let star = Api.CreateShape("star5", 914400, 914400, fill, stroke);
star.SetPosition(914400, 914400);
slide.AddObject(star);
let sequence = slide.GetTimeLine().GetMainSequence();
let rightEffect = sequence.AddEffect(star, "pathRight", "afterprevious");
let coordinates = rightEffect.GetMotionPath().split(" ");
let endX = Number(coordinates[coordinates.length - 2]);
let endY = Number(coordinates[coordinates.length - 1]);
sequence.AddMotionPath(star, "M " + endX + " " + endY + " L " + endX + " " + (endY + 2743200), "afterprevious");