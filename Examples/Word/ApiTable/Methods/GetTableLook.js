// Read which table style formatting bands and highlights are applied in a document.

// Useful for checking which formatting bands and highlights apply to a table before changing its style in a document.

// Retrieve the banded rows, banded columns, and corner highlight flags of a table in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let table = Api.CreateTable(3, 3);
table.SetTableLook(true, true, true, true, true, true);
let tableLook = table.GetTableLook();
paragraph.AddText("Table look — first row: " + tableLook.firstRow + ", banded columns: " + tableLook.bandVer);
doc.Push(table);
