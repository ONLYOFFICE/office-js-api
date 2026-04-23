// Duplicate a table and place the copy on another slide in a presentation.

// How do I make a copy of a table to reuse in a presentation?

// Clone a table and add the duplicate to a new slide in a presentation.

const presentation = Api.GetPresentation();

const table = Api.CreateTable(2, 4);
table.AddRow(1, true);
const row = table.GetRow(1);
const cell = row.GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText("New row was added here.");
content.Push(paragraph);

const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(table);

const copyTable = table.Copy();
const newSlide = Api.CreateSlide();
presentation.AddSlide(newSlide);
newSlide.AddObject(copyTable);