// This example shows how to get the table position within its parent element.

// How to find out the location of the table in its parent one.

// Get the position index of the table.

let doc = Api.GetDocument();
let paragraph = Api.CreateParagraph();
let run = Api.CreateRun();
run.AddText("Number of paragraph elements at this point: ");
run.AddTabStop();
run.AddText("" + paragraph.GetElementsCount());
run.AddLineBreak();
paragraph.AddElement(run);
run.AddText("Number of paragraph elements after we added a text run: ");
run.AddTabStop();
run.AddText("" + paragraph.GetElementsCount());
doc.AddElement(0, paragraph);
let table = Api.CreateTable(3, 3);
doc.AddElement(0, table);
let position = table.GetPosInParent();
table = doc.GetElement(position);
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
table.SetStyle(tableStyle);