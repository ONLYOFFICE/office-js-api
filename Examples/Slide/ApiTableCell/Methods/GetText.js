// Read the inner text of a table cell in a presentation.

// How do I retrieve the plain text from a table cell in a presentation?

// Extract text from a cell and display it in a separate text box on the slide.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const table = Api.CreateTable(2, 2);
const cell = table.GetRow(0).GetCell(0);
cell.AddText("Cell content.");
const text = cell.GetText({TableCellSeparator : ""});

const fill = Api.CreateSolidFill(Api.HexColor('#E8D5B7'));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('roundRect', Api.MillimetersToEmus(200), Api.MillimetersToEmus(30), fill, stroke);
shape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(120));
shape.GetContent().GetElement(0).AddText("Cell text: " + text);

slide.AddObject(table);
slide.AddObject(shape);
