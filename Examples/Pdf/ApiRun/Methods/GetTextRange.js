// Colour a part of a text run of a shape on a PDF page through a text range.

// Positions are counted from the beginning of the run, so the rest of the paragraph is untouched.

// Take the range of the first word of the run and paint it red.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
page.AddObject(shape);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
const run = Api.CreateRun();
run.AddText("Hello World");
paragraph.AddElement(run);

const range = run.GetTextRange(0, 5);
range.SetColor(255, 0, 0);