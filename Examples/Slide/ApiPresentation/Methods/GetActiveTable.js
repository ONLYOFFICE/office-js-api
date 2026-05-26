// Select a table and retrieve it as the active table to apply a background color.

// GetActiveTable returns the table currently selected or being edited in the presentation.

// Add two tables to the slide, select the first, and color it using the returned active table.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const table = Api.CreateTable(3, 3);
table.SetWidth("percent", 40);
table.SetPosition(0, 0);
slide.AddObject(table);

const table2 = Api.CreateTable(3, 3);
table2.SetWidth("percent", 40);
table2.SetPosition(100 * 36000, 100 * 36000);
slide.AddObject(table2);

table.Select();
const activeTable = presentation.GetActiveTable();
activeTable.SetBackgroundColor(Api.RGB(255, 0, 0));
