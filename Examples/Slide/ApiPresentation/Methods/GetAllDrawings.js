// This example shows how to get all the drawing objects from the current presentation

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const slideMaster = presentation.GetMaster(0);
slide.RemoveAllObjects();
slideMaster.RemoveLayout(0, slideMaster.GetAllLayouts().length);
slideMaster.RemoveObject(0, slideMaster.GetAllDrawings().length);

const image = Api.CreateImage('https://api.onlyoffice.com/img/logo.svg', 174 * 36000, 38 * 36000);
image.SetPosition(0, 0);

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 153, 204));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('heart', 38 * 36000, 38 * 36000, fill, stroke);
shape.SetPosition(184 * 36000, 0);

const series = [[200, 240, 280], [250, 260, 280]];
const seriesNames = ["Projected Revenue", "Estimated Costs"];
const categoryNames = [2014, 2015, 2016];
const chart = Api.CreateChart('bar3D', series, seriesNames, categoryNames, 100 * 36000, 75 * 36000, 24, ["0", "0.00"]);
chart.SetPosition(232 * 36000, 0);

const oleObject = Api.CreateOleObject('https://api.onlyoffice.com/img/logo.svg', 174 * 36000, 38 * 36000, 'https://youtu.be/SKGz4pmnpgY', 'asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}');
oleObject.SetPosition(0, 96 * 36000);

slide.AddObject(image);
slide.AddObject(shape);
slide.AddObject(chart);
slide.AddObject(oleObject);

const masterImage = image.Copy();
masterImage.SetPosition(0, 48 * 36000);
slideMaster.AddObject(masterImage);

const masterShape = shape.Copy();
masterShape.SetPosition(184 * 36000, 48 * 36000);
slideMaster.AddObject(masterShape);

const labelFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 230, 150));
const labelStroke = Api.CreateStroke(0, Api.CreateNoFill());
const label = Api.CreateShape('rect', 60 * 36000, 20 * 36000, labelFill, labelStroke);
const drawings = presentation.GetAllDrawings();
const docContent = label.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText('Drawings: ' + drawings.length);
label.SetPosition(0, 144 * 36000);
slide.AddObject(label);
label.Select();
