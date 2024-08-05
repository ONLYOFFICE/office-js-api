// This example shows how to get the nested tables of the specified table.
var oDocument = Api.GetDocument();
var oTable1 = Api.CreateTable(3, 3);
var oTable2 = Api.CreateTable(3, 3);
var oTable3 = Api.CreateTable(2, 2);
let oCell1 = oTable1.GetRow(0).GetCell(0);
let oCell2 = oTable1.GetRow(1).GetCell(1);
oTable1.AddElement(oCell1, 0, oTable2);
oTable1.AddElement(oCell2, 0, oTable3);
oTable1.SetWidth("percent", 100);
oDocument.Push(oTable1);
var arrTables = oTable1.GetTables();
arrTables[0].SetWidth("percent", 50);
arrTables[1].SetWidth("percent", 30);