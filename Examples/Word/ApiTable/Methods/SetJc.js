// This example specifies the alignment of the table with respect to the text margins in the current section.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("The table is aligned at the center of the page horizontally.");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(2, 2);
table.SetWidth("percent", 50);
table.SetStyle(tableStyle);
table.SetJc("center");
doc.Push(table);