// Create a semi-transparent color and apply it as a background of an inline text control in a document.

// How do I set a translucent background color on an inline text control in a document?

// Use a color with opacity to highlight an inline text area inside a paragraph in a document.

const doc = Api.GetDocument();

const run = Api.CreateRun();
run.AddText('This is an inline text content control with a translucent blue fill.');

const inlineLvlSdt = Api.CreateInlineLvlSdt();
inlineLvlSdt.AddElement(run, 0);
inlineLvlSdt.SetBackgroundColor(Api.RGBA(110, 160, 180, 127));

const fill = Api.CreateSolidFill(Api.ThemeColor('accent2'));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape('rect', 3212465, 963295, fill, stroke);
drawing.SetWrappingStyle('behind');

const paragraph = doc.GetElement(0);
paragraph.AddDrawing(drawing);
paragraph.AddInlineLvlSdt(inlineLvlSdt);