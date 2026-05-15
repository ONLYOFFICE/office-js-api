// List all fonts used in text in a PDF.

// How do I see all the font names used in a text element in a PDF?

// Display the fonts applied to text in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
paragraph.AddElement(run);

run = Api.CreateRun();
run.SetFontFamily("Comic Sans MS");
run.AddText("This is a text run with the font family set to 'Comic Sans MS'.");
paragraph.AddElement(run);
paragraph.AddLineBreak();

const fontNames = run.GetFontNames();
paragraph = Api.CreateParagraph();
paragraph.AddText("Run font names: ");
paragraph.AddLineBreak();
for (let i = 0; i < fontNames.length; i++) {
	paragraph.AddText(fontNames[i]);
	paragraph.AddLineBreak();
}
docContent.Push(paragraph);
page.AddObject(shape);