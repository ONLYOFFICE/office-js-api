// Find the theme color name for a color in a PDF.

// How do I identify what theme color is being used in a PDF?

// Check the theme name and display it as text in the document.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const themeColor = Api.ThemeColor('accent1');
const fill = Api.CreateSolidFill(themeColor);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
const run = Api.CreateRun();
run.SetFontSize(30);
run.AddText('Theme name: ' + themeColor.GetThemeName());
paragraph.AddElement(run);
page.AddObject(shape);