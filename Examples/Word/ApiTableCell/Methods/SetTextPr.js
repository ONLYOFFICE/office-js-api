// This example applies the text settings to the entire contents of the cell.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
oTable.SetStyle(oTableStyle);
oTable.GetCell(0, 0).GetContent().GetElement(0).AddText("Cell 1");
oDocument.Push(oTable);
var oTextPr = Api.CreateTextPr();
oTextPr.SetFontSize(30);
oTextPr.SetBold(true);
oTable.GetCell(0, 0).SetTextPr(oTextPr);
builder.SaveFile("docx", "SetTextPr.docx");
builder.CloseFile();