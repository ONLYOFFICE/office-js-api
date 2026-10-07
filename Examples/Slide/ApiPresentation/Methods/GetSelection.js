// Get the current selection from the presentation object.

// Add two shapes to the slide and select the second one.

// The selected shape is filled with orange and labeled.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const stroke = Api.CreateStroke(0, Api.CreateNoFill());

const shape1 = Api.CreateShape(
	'rect',
	Api.MillimetersToEmus(100), Api.MillimetersToEmus(50),
	Api.CreateSolidFill(Api.RGB(150, 150, 150)), stroke
);
shape1.SetPosition(Api.MillimetersToEmus(60), Api.MillimetersToEmus(70));
slide.AddObject(shape1);

const shape2 = Api.CreateShape(
	'rect',
	Api.MillimetersToEmus(100), Api.MillimetersToEmus(50),
	Api.CreateSolidFill(Api.RGB(150, 150, 150)), stroke
);
shape2.SetPosition(Api.MillimetersToEmus(180), Api.MillimetersToEmus(70));
slide.AddObject(shape2);
shape2.Select();

const selection = presentation.GetSelection();
const selectedShapes = selection.GetShapes();
for (let i = 0; i < selectedShapes.length; i++) {
	selectedShapes[i].SetFill(Api.CreateSolidFill(Api.RGB(255, 111, 61)));
	selectedShapes[i].GetDocContent().GetElement(0).AddText('Selected shape');
}