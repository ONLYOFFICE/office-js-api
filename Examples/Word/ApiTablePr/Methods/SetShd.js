// Fill the background of an entire table with a color in a document.

// How do I apply a background shade to a whole table in a document?

// Give a table a colored backdrop to highlight it visually in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We added an orange shading to the table:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let tablePr = tableStyle.GetTablePr();
let table = Api.CreateTable(3, 3);
tablePr.SetShd("clear", Api.HexColor('#FF6F3D'));
table.SetTableLook(true, true, true, true, false, false);
table.SetStyle(tableStyle);
doc.Push(table);