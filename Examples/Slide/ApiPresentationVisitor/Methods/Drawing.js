// List the types of the drawings on a slide with a presentation visitor.

// The Drawing hook receives every drawing, including the drawings inside groups.

// Add a shape and a table to a slide and write the class types of the drawings into a shape.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 60 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.GetDocContent().GetElement(0).AddText("Agenda");
slide.AddObject(shape);
const table = Api.CreateTable(2, 2);
table.SetPosition(608400, 5400000);
slide.AddObject(table);

const types = [];
const visitor = slide.GetVisitor();
visitor.Drawing = function (drawing) {
	types.push(drawing.GetClassType());
	return true;
};
visitor.Traverse();

const result = Api.CreateShape("rect", 300 * 36000, 60 * 36000, fill, stroke);
result.SetPosition(608400, 3600000);
result.GetDocContent().GetElement(0).AddText("Drawing types: " + types.join(", "));
slide.AddObject(result);