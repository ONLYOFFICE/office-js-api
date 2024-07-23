// This example shows how to load data for the mail merge.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var arrField = ["Greeting line", "First name", "Last name"];
for (let i = 0; i < 3; i++) {
	var oRun = Api.CreateRun();
	oRun.AddText(arrField[i]);
	oParagraph.AddElement(oRun);
	oRun.WrapInMailMergeField();
	oParagraph.AddText(" ");
}
oParagraph.AddText("!");
Api.LoadMailMergeData([arrField, ["Dear", "John", "Smith"], ["Hello", "Lara", "Davis"]]);
Api.MailMerge();
builder.SaveFile("docx", "LoadMailMergeData.docx");
builder.CloseFile();