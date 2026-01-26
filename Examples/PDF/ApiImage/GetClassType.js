// How to get a class type of ApiImage.

// Retrieve class type of ApiImage object and insert it to the page.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const image = Api.CreateImage(
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
	170, 170
);
page.AddObject(image);

const gs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('flowChartMagneticTape', 425, 184, fill, stroke);
shape.SetPosition(48, 100);

const docContent = shape.GetContent();
const classType = image.GetClassType();
const paragraph = docContent.GetElement(0);
paragraph.SetJc('left');
paragraph.AddText('Class Type = ' + classType);
page.AddObject(shape);