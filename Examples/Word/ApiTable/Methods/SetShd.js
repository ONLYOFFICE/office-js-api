// This example specifies the shading which shall be applied to the extents of the table.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
paragraph.AddText("We added an orange shading to the table:");
let tableStyle = document.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(document.GetStyle("Bordered"));
let table = Api.CreateTable(2, 2);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
table.SetShd("clear", 255, 111, 61, false);
document.Push(table);