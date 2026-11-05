// Shade the table cells that contain a word in a presentation with a presentation visitor.

// The TableCell hook receives each table cell before its content is visited.

// Fill a table with task states and shade the cells with the "Done" text.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const table = Api.CreateTable(2, 2);
table.SetPosition(608400, 1267200);
slide.AddObject(table);
table.GetCell(0, 0).GetContent().GetElement(0).AddText("Design");
table.GetCell(0, 1).GetContent().GetElement(0).AddText("Done");
table.GetCell(1, 0).GetContent().GetElement(0).AddText("Testing");
table.GetCell(1, 1).GetContent().GetElement(0).AddText("In progress");

const visitor = presentation.GetVisitor();
visitor.TableCell = function (cell) {
	if (cell.GetContent().GetElement(0).GetText().indexOf("Done") !== -1)
		cell.SetShd(Api.CreateShd("clear", Api.Color("#E2EFDA")));
	return true;
};
visitor.Traverse();