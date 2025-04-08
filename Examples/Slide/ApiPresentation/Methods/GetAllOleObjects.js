// This example shows how to get all the OLE objects from the current presentation.

const oPresentation = Api.GetPresentation();
const oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
const oSlideMaster = oPresentation.GetMaster(0);
oSlideMaster.RemoveObject(0, oSlideMaster.GetAllDrawings().length);

// Create OLE objects with an image and URL and add them to the slide and slide master
const oOleObject1 = Api.CreateOleObject(
	'https://api.onlyoffice.com/img/logo.svg',
	174 * 36000, 38 * 36000,
	'https://youtu.be/SKGz4pmnpgY',
	'asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}'
);
oSlide.AddObject(oOleObject1);
const oOleObject2 = oOleObject1.Copy();
oOleObject2.SetPosition(0, 48 * 36000);
oSlideMaster.AddObject(oOleObject2);

// Create a label to show the number of OLE objects
const oLabelFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 230, 150));
const oLabelStroke = Api.CreateStroke(0, Api.CreateNoFill());
const oLabel = Api.CreateShape('rect', 60 * 36000, 20 * 36000, oLabelFill, oLabelStroke);
oLabel.SetPosition(0, 96 * 36000);
oSlide.AddObject(oLabel);

// Add number of OLE objects in the presentation as text inside the label
const aOleObjects = oPresentation.GetAllOleObjects();
const oDocContent = oLabel.GetDocContent();
const oParagraph = oDocContent.GetElement(0);
oParagraph.AddText('OLE Objects: ' + aOleObjects.length);
