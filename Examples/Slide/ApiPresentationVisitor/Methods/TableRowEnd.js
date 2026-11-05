// Count the filled cells of each table row in a presentation with a presentation visitor.

// The TableRowEnd hook is called after all the cells of a row have been visited.

// Fill some cells of a table, count the filled cells per row and write the counts into a shape.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const table = Api.CreateTable(2, 3);
table.SetPosition(608400, 1267200);
slide.AddObject(table);
table.GetCell(0, 0).GetContent().GetElement(0).AddText("Name");
table.GetCell(0, 1).GetContent().GetElement(0).AddText("Role");
table.GetCell(1, 2).GetContent().GetElement(0).AddText("Remote");

const counts = [];
let filled = 0;
const visitor = presentation.GetVisitor();
visitor.TableRow = function () {
	filled = 0;
	return false;
};
visitor.TableCell = function (cell) {
	if (cell.GetContent().GetElement(0).GetText().trim() !== "")
		filled += 1;
	return true;
};
visitor.TableRowEnd = function () {
	counts.push(filled);
};
visitor.Traverse();

const result = Api.CreateShape("rect", 300 * 36000, 60 * 36000, fill, stroke);
result.SetPosition(608400, 3600000);
result.GetDocContent().GetElement(0).AddText("Filled cells per row: " + counts.join(", "));
slide.AddObject(result);