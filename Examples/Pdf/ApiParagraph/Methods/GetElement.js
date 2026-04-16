// Get a paragraph element using the position specified in a PDF document.

// How to return an element from the ApiPargaraph object in a PDF document.

// Get an object from the paragraph in a PDF document.

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
run.AddText("This is the text for the first text run. Do not forget a space at its end to separate from the second one. ");
paragraph.AddElement(run);

run = Api.CreateRun();
run.AddText("This is the text for the second run. We will set it bold afterwards. It also needs space at its end. ");
paragraph.AddElement(run);

run = Api.CreateRun();
run.AddText("This is the text for the third run. It ends the paragraph.");
paragraph.AddElement(run);

run = paragraph.GetElement(2);
run.SetBold(true);
page.AddObject(shape);