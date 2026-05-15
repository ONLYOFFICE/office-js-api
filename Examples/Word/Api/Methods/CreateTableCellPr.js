// Apply custom shading to individual table cells in a document.

// How do I change the background color of a specific table cell in a document?

// Style a single cell with gray shading using a custom table style in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a 3x3 table and set the gray shading for cell #1:");

let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));

let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);

let tableStylePr = tableStyle.GetConditionalTableStyle("topLeftCell");
table.SetTableLook(true, true, true, true, true, true);
let tableCellPr = Api.CreateTableCellPr();
tableCellPr.SetShd("clear", 0xEE, 0xEE, 0xEE);
tableStylePr.SetTableCellPr(tableCellPr);

table.SetStyle(tableStyle);
doc.Push(table);