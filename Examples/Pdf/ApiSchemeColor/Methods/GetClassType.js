// Identify the type of a color scheme object in a PDF.

// What kind of object is a scheme color in a PDF?

// Determine the class name of a color scheme in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const schemeColor = Api.CreateSchemeColor("dk1");
const fill = Api.CreateSolidFill(schemeColor);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(150 * 36000, 65 * 36000);

const docContent = shape.GetContent();
const classType = schemeColor.GetClassType();
const paragraph = docContent.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("Class Type = " + classType);
page.AddObject(shape);