// Apply the same text formatting to the whole content of a table cell in a presentation.

// Useful for highlighting a header cell without formatting each text run separately.

// Make the text of the first cell bold and increase its font size.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(2, 3);
const cell = table.GetRow(0).GetCell(0);
cell.SetText("Quarterly report");
const textPr = Api.CreateTextPr();
textPr.SetBold(true);
textPr.SetFontSize(30);
cell.SetTextPr(textPr);
slide.RemoveAllObjects();
slide.AddObject(table);
