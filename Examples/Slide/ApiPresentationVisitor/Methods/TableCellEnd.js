// Find the table cell with the longest text in a presentation with a presentation visitor.

// The TableCellEnd hook is called after all the text of a table cell has been visited.

// Fill a table, measure the text of each cell and make the longest one bold.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const table = Api.CreateTable(2, 2);
table.SetPosition(608400, 1267200);
slide.AddObject(table);
table.GetCell(0, 0).GetContent().GetElement(0).AddText("Plan");
table.GetCell(0, 1).GetContent().GetElement(0).AddText("Review the quarterly results");
table.GetCell(1, 0).GetContent().GetElement(0).AddText("Budget");
table.GetCell(1, 1).GetContent().GetElement(0).AddText("Approve");

let length = 0;
let maxLength = -1;
let longest = null;
const visitor = presentation.GetVisitor();
visitor.TableCell = function () {
	length = 0;
	return false;
};
visitor.Text = function (text) {
	length += text.length;
};
visitor.TableCellEnd = function (cell) {
	if (length > maxLength) {
		maxLength = length;
		longest = cell;
	}
};
visitor.Traverse();

longest.GetContent().GetElement(0).SetBold(true);