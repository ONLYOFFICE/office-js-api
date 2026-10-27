// Set the total height of a table in a document.

// Distribute the requested height proportionally among the table rows.

// Create a table and set its overall height to 60 millimeters.

let doc = Api.GetDocument();
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
doc.Push(table);
table.SetHeight(Api.MillimetersToEmus(60));
