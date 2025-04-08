// This example shows how to get all the drawing objects from the current presentation

const oPresentation = Api.GetPresentation();
const oSlide = oPresentation.GetSlideByIndex(0);
const oSlideMaster = oPresentation.GetMaster(0);
oSlide.RemoveAllObjects();
oSlideMaster.RemoveLayout(0, oSlideMaster.GetAllLayouts().length);
oSlideMaster.RemoveObject(0, oSlideMaster.GetAllDrawings().length);

// Create an image
const oImage = Api.CreateImage('https://api.onlyoffice.com/img/logo.svg', 174 * 36000, 38 * 36000);
oImage.SetPosition(0, 0);

// Create a shape
const oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 153, 204));
const oStroke = Api.CreateStroke(0, Api.CreateNoFill());
const oShape = Api.CreateShape('heart', 38 * 36000, 38 * 36000, oFill, oStroke);
oShape.SetPosition(184 * 36000, 0);

// Create a chart object (bar chart)
const aSeries = [[200, 240, 280], [250, 260, 280]];
const aSeriesNames = ["Projected Revenue", "Estimated Costs"];
const aCatNames = [2014, 2015, 2016];
const oChart = Api.CreateChart('bar3D', aSeries, aSeriesNames, aCatNames, 100 * 36000, 75 * 36000, 24, ["0", "0.00"]);
oChart.SetPosition(232 * 36000, 0);

// Create an OLE object
const oOleObject = Api.CreateOleObject('https://api.onlyoffice.com/img/logo.svg', 174 * 36000, 38 * 36000, 'https://youtu.be/SKGz4pmnpgY', 'asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}');
oOleObject.SetPosition(0, 96 * 36000);

// Add objects to the slide
oSlide.AddObject(oImage);
oSlide.AddObject(oShape);
oSlide.AddObject(oChart);
oSlide.AddObject(oOleObject);

// Add some objects to the master slide
const oMasterImage = oImage.Copy();
oMasterImage.SetPosition(0, 48 * 36000);
oSlideMaster.AddObject(oMasterImage);

const oMasterShape = oShape.Copy();
oMasterShape.SetPosition(184 * 36000, 48 * 36000);
oSlideMaster.AddObject(oMasterShape);

// Create a label to show the number of drawing objects
const oLabelFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 230, 150));
const oLabelStroke = Api.CreateStroke(0, Api.CreateNoFill());
const oLabel = Api.CreateShape('rect', 60 * 36000, 20 * 36000, oLabelFill, oLabelStroke);
const aDrawings = oPresentation.GetAllDrawings();
const oDocContent = oLabel.GetDocContent();
const oParagraph = oDocContent.GetElement(0);
oParagraph.AddText('Drawings: ' + aDrawings.length);
oLabel.SetPosition(0, 144 * 36000);
oSlide.AddObject(oLabel);
oLabel.Select();
