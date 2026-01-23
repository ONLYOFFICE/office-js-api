// How to add a new flowchart shape.

// Add a new shape indicating its properties.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 425, 283, fill, stroke);
shape.SetPosition(48, 100);
const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);

let run = Api.CreateRun();
run.SetFontSize(60);
run.AddText("This is just a sample text. ");
paragraph.AddElement(run);

run = Api.CreateRun();
run.SetFontSize(60);
run.SetFontFamily("Comic Sans MS");
run.AddText("This is a text run with the font family set to 'Comic Sans MS'.");
paragraph.AddElement(run);
page.AddObject(shape);