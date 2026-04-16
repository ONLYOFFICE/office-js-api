// Get a table that contains the content control in a document.

// How to display the parent table of the inline text control in a document.

// Update the parent table of inline content control in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
inlineLvlSdt.AddText("This is an inline text content control.");
let paragraph = Api.CreateParagraph();
paragraph.AddElement(inlineLvlSdt, 0);
let cell = table.GetRow(0).GetCell(0);
cell.AddElement(0, paragraph);
let parentTable = inlineLvlSdt.GetParentTable();
cell = parentTable.GetRow(2).GetCell(0);
parentTable.RemoveRow(cell);