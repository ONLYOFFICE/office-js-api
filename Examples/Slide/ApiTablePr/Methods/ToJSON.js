// Serialize the table properties of a presentation table style into JSON.

// The resulting string can be converted back with the Api.FromJSON method.

// Write the JSON representation of the table style properties into the first cell.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
const style = presentation.GetStyle("Medium Style 2 - Accent 1");
table.SetStyle(style);
const tablePr = style.GetTablePr();
tablePr.SetTableBorderAll("single", 0.5, Api.CreateSolidFill(Api.CreateRGBColor(255, 0, 0)));
const paragraph = Api.CreateParagraph();
paragraph.AddText(tablePr.ToJSON());
table.GetCell(0, 0).GetContent().Push(paragraph);
slide.RemoveAllObjects();
slide.AddObject(table);
