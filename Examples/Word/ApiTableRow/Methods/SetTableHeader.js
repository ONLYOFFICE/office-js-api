// Mark the first row of a table as a repeating header displayed at the top of every page.

// Create a 90-row styled table and designate the first row as the header.

// Apply the header designation to the first row and fill its three cells with content.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a 90x3 table and set row #1 as the table header:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(90, 3);
table.SetWidth("percent", 100);
let tableRow = table.GetRow(0);
tableRow.SetTableHeader(true);
let cell = tableRow.GetCell(0);
table.Cells[0][0].GetContent().AddText("Header cell #1");
table.Cells[0][1].GetContent().AddText("Header cell #2");
table.Cells[0][2].GetContent().AddText("Header cell #3");
table.SetStyle(tableStyle);
doc.Push(table);