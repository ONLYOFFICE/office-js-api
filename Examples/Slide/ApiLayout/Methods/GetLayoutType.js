// Get the type of a slide layout in a presentation.

// How do I identify the type of a layout in a presentation?

// Retrieve all available layout types and display them in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const master = presentation.GetMaster(0);
const layouts = master.GetAllLayouts();

const fill = Api.CreateSolidFill(Api.HexColor('#33bbaa'));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', Api.MillimetersToEmus(300), Api.MillimetersToEmus(130), fill, stroke);
slide.AddObject(shape);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText('Found layouts with types:\n');
paragraph.AddText(
	layouts
		.map(layout => layout.GetLayoutType())
		.join(', ')
);