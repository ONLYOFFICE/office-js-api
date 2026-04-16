// Retrieve the class type of an image in a PDF document.

// How to identify the class type of an image in a PDF document?

// Obtain the class type identifier of an image object in a PDF document.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const image = Api.CreateImage(
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
	60 * 36000, 60 * 36000
);
page.AddObject(image);

const gs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('flowChartMagneticTape', 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetContent();
const classType = image.GetClassType();
const paragraph = docContent.GetElement(0);
paragraph.SetJc('left');
paragraph.AddText('Class Type = ' + classType);
page.AddObject(shape);