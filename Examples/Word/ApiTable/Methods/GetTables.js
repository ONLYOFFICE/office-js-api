// This example shows how to get the tables that contain the table.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTable1 = Api.CreateTable(3, 3);
var oTable2 = Api.CreateTable(3, 3);
oTable1.AddElement(oCell, 0, oTable2);
oTable1.SetWidth("percent", 100);
oDocument.Push(oTable1);
oDocument.Push(oTable1);
var arrTables = oTable1.GetTables();
oTable2 = arrTables[0];
oTable2.SetWidth("percent", 50);
builder.SaveFile("docx", "GetTables.docx");
builder.CloseFile();