// Check if the color used in a shape fill is a theme color in a presentation.

// How can I is theme color using a color in a presentation?

// Is theme color for a color in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const hexColor = Api.HexColor('#FF0000');
const themeColor = Api.ThemeColor('accent1');

const fill = Api.CreateSolidFill(hexColor);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
const run = Api.CreateRun();
run.SetFontSize(30);
run.AddText('Is hexColor a theme color? ' + hexColor.IsThemeColor());
run.AddText('\nIs themeColor a theme color? ' + themeColor.IsThemeColor());
paragraph.AddElement(run);
slide.AddObject(shape);