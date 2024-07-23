// This example adds the new rows to the table.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
oTable.GetCell(0, 0).GetContent().GetElement(0).AddText("Two new rows were added after this cell.");
oTable.GetCell(0, 0).AddRows(2, false);
builder.SaveFile("docx", "AddRows.docx");
builder.CloseFile();