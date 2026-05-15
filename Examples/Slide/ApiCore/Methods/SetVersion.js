// Store a version number for the presentation in a presentation.

// How do I track the version of my presentation?

// Write and retrieve the version identifier for a presentation.

const presentation = Api.GetPresentation();
const core = presentation.GetCore();
core.SetVersion("v9.0");

const fill = Api.CreateSolidFill(Api.RGB(100, 150, 200));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 150 * 36000, 150 * 36000, fill, stroke);

const version = core.GetVersion();
const paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText("Version: " + version);

const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(shape);