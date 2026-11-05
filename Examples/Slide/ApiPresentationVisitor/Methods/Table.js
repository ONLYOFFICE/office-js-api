// Report the size of every table in a presentation with a presentation visitor.

// The Table hook is called right after the Drawing hook for the same table, and returning true skips the table rows.

// Add two tables to a slide and write the number of rows and columns of each table into a shape.

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

const sizes = [];
const visitor = presentation.GetVisitor();
visitor.Table = function (table) {
	sizes.push(table.GetRowsCount() + "x" + table.GetRow(0).GetCellsCount());
	return true;
};
visitor.Traverse();

const result = Api.CreateShape("rect", 300 * 36000, 60 * 36000, fill, stroke);
result.SetPosition(608400, 3600000);
result.GetDocContent().GetElement(0).AddText("Table sizes (rows x columns): " + sizes.join(", "));
slide.AddObject(result);