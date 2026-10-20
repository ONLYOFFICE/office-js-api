// Count the total number of columns in a table in a document.

// How do I find out how many columns a table contains in a document?

// Display the column count before and after adding a column to a table in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a 2x2 table and add a new column, so that it becomes 3 columns wide:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(2, 2);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
let columnsCountBefore = table.GetColumnsCount();
table.AddColumn();
let columnsCountAfter = table.GetColumnsCount();
paragraph = Api.CreateParagraph();
paragraph.AddText("The table above had " + columnsCountBefore + " columns before we added a new one. ");
paragraph.AddText("Now this table has " + columnsCountAfter + " columns.");
doc.Push(paragraph);