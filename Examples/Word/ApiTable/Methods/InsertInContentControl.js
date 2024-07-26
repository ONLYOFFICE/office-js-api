// This example wraps the current table object with a content control.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
oTable.SetStyle(oTableStyle);
var oBlockLvlSdt = oTable.InsertInContentControl(1);
oDocument.AddElement(0, oBlockLvlSdt);
builder.SaveFile("docx", "InsertInContentControl.docx");
builder.CloseFile();