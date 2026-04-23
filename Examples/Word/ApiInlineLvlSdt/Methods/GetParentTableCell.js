// Retrieve the table cell that contains an inline content control in a document.

// How do I get the parent table cell of an inline content control in a document?

// Apply a background color to the cell that holds an inline content control in a document.

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
let parentTableCell = inlineLvlSdt.GetParentTableCell();
parentTableCell.SetShd("clear", Api.HexColor('#FF6F3D'));