// Apply a background color to the entire table in a document.

// How do I fill the table background with a specific color in a document?

// Highlight a table by giving it a colored background shading in a document.

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