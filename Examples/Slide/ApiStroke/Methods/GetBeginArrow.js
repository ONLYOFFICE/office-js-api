// Read the beginning arrow of a line in a presentation.

// How do I find out which arrow is applied to the start of a line in a presentation?

// Apply a beginning arrow to a line's stroke, read it back, and label the result in a presentation.

let presentation = Api.GetPresentation();
let slide = presentation.GetSlideByIndex(0);
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 200, 100));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.CreateRGBColor(0, 0, 255)));
let line = Api.CreateShape("line", 100 * 36000, 50 * 36000, fill, stroke);
line.SetPosition(2000000, 1000000);
slide.AddObject(line);
let retrievedStroke = line.GetLine();
retrievedStroke.SetBeginArrow("triangle", "medium", "large");
let arrow = retrievedStroke.GetBeginArrow();

let label = Api.CreateShape("rect", 120 * 36000, 30 * 36000, fill, Api.CreateStroke(0, Api.CreateNoFill()));
label.SetPosition(2000000, 3000000);
slide.AddObject(label);
label.GetDocContent().GetElement(0).AddText("Begin arrow type: " + (arrow ? arrow.Type : "not set"));
