// Apply a background color to a table cell in a document.

// How do I fill a table cell with a specific background color in a document?

// Highlight a table cell by giving it a colored background in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a 3x3 table and add add an orange shading to all cells:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let tableCellPr = tableStyle.GetTableCellPr();
tableCellPr.SetShd("clear", Api.HexColor('#FF6F3D'));
table.SetStyle(tableStyle);
doc.Push(table);