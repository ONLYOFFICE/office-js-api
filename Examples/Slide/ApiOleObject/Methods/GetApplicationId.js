// This example gets the application ID from the current OLE object.

// How to return an application ID of the current OLE object.

// Get an application ID of a specified OLE object.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const oleObject = Api.CreateOleObject(
	"https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png",
	130 * 36000, 90 * 36000,
	"https://youtu.be/SKGz4pmnpgY",
	"asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}"
);
oleObject.SetSize(200 * 36000, 130 * 36000);
oleObject.SetPosition(70 * 36000, 30 * 36000);
slide.AddObject(oleObject);
const appId = oleObject.GetApplicationId();

const gs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
const fill = Api.CreateLinearGradientFill([gs1, gs2], 5400000);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("rect", 300 * 36000, 15 * 36000, fill, stroke);
drawing.SetPosition(20 * 36000, 170 * 36000);
const docContent = drawing.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("The application ID for the current OLE object: " + appId);
slide.AddObject(drawing);
