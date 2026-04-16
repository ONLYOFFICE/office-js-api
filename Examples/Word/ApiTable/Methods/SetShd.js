// Specify the shading which shall be applied to the extents of the table in a document.

// How to set shading of the table in a document.

// Create a table and specify its shading as "clear" in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We added an orange shading to the table:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(2, 2);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
table.SetShd("clear", Api.HexColor('#FF6F3D'));
doc.Push(table);