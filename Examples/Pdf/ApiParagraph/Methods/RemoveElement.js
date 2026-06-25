// Delete a specific element from a paragraph object in a PDF.

// Useful for removing an element by its position in a paragraph in a PDF.

// Eliminate an element at a given index from a paragraph in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.RemoveAllElements();

let run = Api.CreateRun();
run.AddText("Run 1. ");
paragraph.AddElement(run);

run = Api.CreateRun();
run.AddText("Run 2. ");
paragraph.AddElement(run);

run = Api.CreateRun();
run.AddText("Run 3. ");
paragraph.AddElement(run);

run = Api.CreateRun();
run.AddText("Run 4. ");
paragraph.AddElement(run);

run = Api.CreateRun();
run.AddText("Run 5. ");
paragraph.AddElement(run);

paragraph.RemoveElement(3);

page.AddObject(shape);