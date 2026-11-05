// Number the rows of every table in a presentation with a presentation visitor.

// The TableRow hook is called for each table row before its cells are visited.

// Add a table to a slide and write the row number into the first cell of each row.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const table = Api.CreateTable(3, 2);
table.SetPosition(608400, 1267200);
slide.AddObject(table);

const visitor = presentation.GetVisitor();
visitor.TableRow = function (row) {
	row.GetCell(0).GetContent().GetElement(0).AddText("Row " + (row.GetIndex() + 1));
	return true;
};
visitor.Traverse();