// This example adds a page break and starts the next element from the next page.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRun = oParagraph.AddText("This is the text for the first page. After it a page break will be added. Scroll down to the second page to see the text there.");
oParagraph.AddPageBreak();
oRun = oParagraph.AddText("This is the text which starts from the beginning of the second page. ");
oRun = oParagraph.AddText("It is written in two text runs, you need a space at the end of the first run sentence to separate them.");
builder.SaveFile("docx", "AddPageBreak.docx");
builder.CloseFile();