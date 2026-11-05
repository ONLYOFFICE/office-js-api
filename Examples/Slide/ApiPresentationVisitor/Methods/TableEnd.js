// Count the cells of every table in a presentation with a presentation visitor.

// The TableEnd hook is called after all the rows and cells of a table have been visited.

// Add two tables to a slide, count their cells and write the counts into a shape.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const small = Api.CreateTable(2, 2);
small.SetPosition(608400, 1267200);
slide.AddObject(small);
const large = Api.CreateTable(3, 4);
large.SetPosition(608400 + 160 * 36000, 1267200);
slide.AddObject(large);

const counts = [];
let cells = 0;
const visitor = presentation.GetVisitor();
visitor.Table = function () {
	cells = 0;
	return false;
};
visitor.TableCell = function () {
	cells += 1;
	return true;
};
visitor.TableEnd = function () {
	counts.push(cells);
};
visitor.Traverse();

const result = Api.CreateShape("rect", 300 * 36000, 60 * 36000, fill, stroke);
result.SetPosition(608400, 3600000);
result.GetDocContent().GetElement(0).AddText("Cells per table: " + counts.join(", "));
slide.AddObject(result);