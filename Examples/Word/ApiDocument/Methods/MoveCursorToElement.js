// Move the cursor to the start or end of any supported element in a document.

// Pass a table, paragraph, run, content control, drawing, comment, bookmark or another element; the cursor moves to its start by default.

// Place the cursor at the end of a table and then at the start of a content control, entering text at each position.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("The cursor is moved to elements of different types.");
let table = Api.CreateTable(2, 2);
table.SetWidth("percent", 100);
table.SetStyle(doc.GetStyle("Bordered"));
doc.Push(table);
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("Text inside the content control.");
doc.Push(blockLvlSdt);
doc.MoveCursorToElement(table, false);
doc.EnterText("End of the table");
doc.MoveCursorToElement(blockLvlSdt);
doc.EnterText("Start of the content control. ");
