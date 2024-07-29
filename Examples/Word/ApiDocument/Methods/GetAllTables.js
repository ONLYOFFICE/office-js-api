// This example showh how to get an array of all tables from the document.
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
var aTables = oDocument.GetAllTables();
var oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is just a sample text in the first cell.");
var oCell = aTables[0].GetCell(0,0);
aTables[0].AddElement(oCell, 0, oParagraph);