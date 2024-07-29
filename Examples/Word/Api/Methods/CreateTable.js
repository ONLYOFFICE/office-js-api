// This example creates a 3x3 table and inserts it into the document.
var oDocument = Api.GetDocument();
var oTable = Api.CreateTable(3, 3);
oDocument.Push(oTable);
oTable.SetWidth("percent", 100);