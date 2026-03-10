// This example returns the background of the current slide master.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const master = presentation.GetMaster(0);
const fill = Api.CreateSolidFill(Api.RGB(100, 60, 80));
master.SetBackground(fill);

const bgFill = master.GetBackground();
const classType = bgFill.GetClassType();

const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape(
	'rect',
	Api.MillimetersToEmus(120), Api.MillimetersToEmus(40),
	Api.CreateSolidFill(Api.RGB(45, 45, 60)), stroke
);
shape.SetPosition(Api.MillimetersToEmus(30), Api.MillimetersToEmus(30));

const content = shape.GetContent();
const paragraph = content.GetElement(0);
paragraph.AddText('Master background fill class type: ' + classType);
slide.AddObject(shape);
