// Access the cell formatting tied to a conditional table style in a document.

// How do I read and change cell appearance settings for a specific area of a table in a document?

// Apply background shading to cells matched by a table style condition in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a 3x3 table and set the gray shading for cell #1:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let tableStylePr = tableStyle.GetConditionalTableStyle("topLeftCell");
table.SetTableLook(true, true, true, true, true, true);
tableStylePr.GetTableCellPr().SetShd("clear", 0xEE, 0xEE, 0xEE);
table.SetStyle(tableStyle);
doc.Push(table);