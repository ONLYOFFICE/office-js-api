// Get the type of the conditional formatting region in a presentation.

// Useful for getting the type of a table style part.

// Get the table style part and display its type.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
const style = presentation.GetStyle("Medium Style 2 - Accent 1");
const stylepr = style.GetConditionalTableStyle("wholeTable");
const paragraph = Api.CreateParagraph();
paragraph.AddText("Type: " + stylepr.GetType());
table.GetCell(0, 0).GetContent().Push(paragraph);
slide.RemoveAllObjects();
slide.AddObject(table);
