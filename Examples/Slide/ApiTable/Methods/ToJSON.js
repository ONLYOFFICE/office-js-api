// This example converts the table object into the JSON object.

// How to get JSON object from the table.

// Get a slide by its index, convert its table to JSON and create another one from the JSON.

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
