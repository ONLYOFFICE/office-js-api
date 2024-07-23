// This example specifies the algorithm which will be used to lay out the contents of the table within the document.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("We set the table cells to preserve their size:");
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTablePr = oTableStyle.GetTablePr();
var oTable = Api.CreateTable(3, 3);
oTablePr.SetTableLayout("fixed");
oTable.SetTableLook(true, true, true, true, false, false);
oTable.SetStyle(oTableStyle);
var oCell = oTable.GetRow(0).GetCell(0);
oCell.GetContent().GetElement(0).AddText("Fixed layout");
oDocument.Push(oTable);
builder.SaveFile("docx", "SetTableLayout.docx");
builder.CloseFile();