// Recalculate the text autofit of shapes after their text is changed.

// Set the autofit types to empty shapes and then add a long text to them.

// After the script is executed, the first shape is resized to fit the text and the text of the second shape is shrunk to fit the shape.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const longText = 'This long text is added to the shape after its autofit type is set, so the autofit is recalculated for the new text.';

const shape1 = Api.CreateShape(
	'rect',
	Api.MillimetersToEmus(100), Api.MillimetersToEmus(20),
	Api.CreateSolidFill(Api.RGB(60, 50, 80)), stroke
);
shape1.SetPosition(Api.MillimetersToEmus(60), Api.MillimetersToEmus(40));
shape1.SetTextFit('autoFit');
slide.AddObject(shape1);

const shape2 = Api.CreateShape(
	'rect',
	Api.MillimetersToEmus(100), Api.MillimetersToEmus(20),
	Api.CreateSolidFill(Api.RGB(75, 55, 55)), stroke
);
shape2.SetPosition(Api.MillimetersToEmus(180), Api.MillimetersToEmus(40));
shape2.SetTextFit('normAutoFit');
slide.AddObject(shape2);

shape1.GetDocContent().GetElement(0).AddText('autoFit: ' + longText);
shape2.GetDocContent().GetElement(0).AddText('normAutoFit: ' + longText);

shape1.RecalculateAutoFit();
shape2.RecalculateAutoFit();