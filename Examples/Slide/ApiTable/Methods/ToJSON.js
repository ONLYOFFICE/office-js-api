// Convert a table to JSON and recreate it from the JSON representation.

// Export table structure to JSON format and import it back.

// Get a slide, convert its table to JSON, and create a new table from that JSON.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const table = Api.CreateTable(2, 4);
const json = table.ToJSON(true);
const tableFromJSON = Api.FromJSON(json);

const type = tableFromJSON.GetClassType();
const row = tableFromJSON.GetRow(0);
const cell = row.GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText("Class type = " + type);
content.Push(paragraph);
slide.AddObject(tableFromJSON);