// Remove a table entirely from a document.

// How do I delete a table from a document?

// Eliminate an unwanted table so it no longer appears in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
table.Delete();
let paragraph = Api.CreateParagraph();
paragraph.AddText("The table was removed from the document.");
doc.Push(paragraph);