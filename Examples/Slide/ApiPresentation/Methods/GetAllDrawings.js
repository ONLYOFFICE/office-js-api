// Collect all images, shapes, charts, and embedded objects in a presentation.

// How do I find every drawing element in a presentation?

// Retrieve drawings from slides and count them in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const image = Api.CreateImage('https://static.onlyoffice.com/assets/docs/samples/img/presentation_sky.png', 174 * 36000, 38 * 36000);
image.SetPosition(0, 0);

const fill = Api.CreateSolidFill(Api.RGB(255, 153, 204));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('heart', 38 * 36000, 38 * 36000, fill, stroke);
shape.SetPosition(184 * 36000, 0);

const series = [[200, 240, 280], [250, 260, 280]];
const seriesNames = ['Projected Revenue', 'Estimated Costs'];
const categoryNames = [2014, 2015, 2016];
const chart = Api.CreateChart('bar3D', series, seriesNames, categoryNames, 100 * 36000, 75 * 36000, 24, ['0', '0.00']);
chart.SetPosition(232 * 36000, 0);

const oleObject = Api.CreateOleObject(
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
	150 * 36000, 150 * 36000,
	'https://youtu.be/SKGz4pmnpgY',
	'asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}'
);
oleObject.SetPosition(0, 96 * 36000);

slide.AddObject(image);
slide.AddObject(shape);
slide.AddObject(chart);
slide.AddObject(oleObject);

const drawings = presentation.GetAllDrawings();
const labelFill = Api.CreateSolidFill(Api.RGB(255, 230, 150));
const labelStroke = Api.CreateStroke(0, Api.CreateNoFill());
const label = Api.CreateShape('rect', 60 * 36000, 20 * 36000, labelFill, labelStroke);
label.SetPosition(0, 144 * 36000);
slide.AddObject(label);

const docContent = label.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText('Drawings in presentation excluding slide layouts and master slides: ' + drawings.length);
label.Select();