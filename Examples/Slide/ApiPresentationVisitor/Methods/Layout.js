// List the names of the slide layouts with a presentation visitor.

// The Layout hook is called for each slide layout when the traversal runs with the layouts option.

// Traverse the layouts of the presentation and write their names into a shape on the first slide.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());

const names = [];
const visitor = presentation.GetVisitor();
visitor.Slide = function () {
	return true;
};
visitor.Layout = function (layout) {
	names.push(layout.GetName());
	return true;
};
visitor.Traverse({layouts: true});

const result = Api.CreateShape("rect", 300 * 36000, 60 * 36000, fill, stroke);
result.SetPosition(608400, 3600000);
result.GetDocContent().GetElement(0).AddText("Layouts: " + names.join(", "));
slide.AddObject(result);