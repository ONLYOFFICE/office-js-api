# GetCommentsReport

Returns a report about all the comments added to the document.

## Syntax

expression.GetCommentsReport();

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[CommentReport](../../../Enumerations/CommentReport.md)

## Example

This example showh how to get a report about all the comments added to the document.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph1 = oDocument.GetElement(0);
oParagraph1.AddText("Commenting");
oParagraph1.SetJc("center");
oParagraph1.SetFontSize(24);
oParagraph1.SetBold(true);
var oParagraph2 = Api.CreateParagraph();
oParagraph2.AddText("The Comment option allows you to leave comments on the specific words, edit and remove these comments.");
oDocument.Push(oParagraph2);
var oParagraph3 = Api.CreateParagraph();
oParagraph3.AddText("All the comments will be saved and shown to other document users.");
oDocument.Push(oParagraph3);
Api.AddComment(oParagraph2, "You can also leave comment on phrases, sentences and other document parts", "John Smith");
var oParagraph4 = Api.CreateParagraph();
oParagraph4.AddText("In order to enable the comment option, the comment parameter must be set to true.");
oDocument.Push(oParagraph4);
var oParagraph5 = Api.CreateParagraph();
oParagraph5.AddText("The document side bar will contain the Comment menu option.");
oDocument.Push(oParagraph5);
Api.AddComment(oParagraph4, "You can set the comment option in the permissions section of the document initialization", "Mark Pottato");
var oCommentsReport = oDocument.GetCommentsReport();
var oParagraph = Api.CreateParagraph();
oParagraph.AddLineBreak();
oParagraph.AddLineBreak();
oParagraph.AddText("Comments report");
oDocument.Push(oParagraph);
var nRows = 1;
for (let sUserName in oCommentsReport) {
	nRows += oCommentsReport[sUserName].length;
}
var nCols = 6;
var oTable = Api.CreateTable(nCols, nRows);
oDocument.Push(oTable);

function privateFillCell(nCurRow, nCurCol, sText) {
	var oRow = oTable.GetRow(nCurRow);
	var oCell = oRow.GetCell(nCurCol);
	var oCellContent = oCell.GetContent();
	var oRun = oCellContent.GetElement(0).AddText(sText);
	return {
		Cell: oCell,
		Run: oRun
	};
}
privateFillCell(0, 0, "Name");
privateFillCell(0, 1, "Date");
privateFillCell(0, 2, "");
privateFillCell(0, 3, "Solved");
privateFillCell(0, 4, "Text");
privateFillCell(0, 5, "Quote text");
var nCurRow = 1;
for (let sUserName in oCommentsReport) {
	var arrUserComments = oCommentsReport[sUserName];
	var arrCells = [];
	for (let nIndex = 0, nCount = arrUserComments.length; nIndex < nCount; ++nIndex, ++nCurRow) {
		var oCommentInfo = oCommentsReport[sUserName][nIndex];
		arrCells.push(privateFillCell(nCurRow, 0, "").Cell);
		privateFillCell(nCurRow, 1, (new Date(oCommentInfo["Date"])).toString());
		privateFillCell(nCurRow, 2, oCommentInfo["IsAnswer"] === true ? "answer" : "comment");
		if (oCommentInfo["IsAnswer"] !== true) {
		if (oCommentInfo["IsSolved"] === true) privateFillCell(nCurRow, 3, "yes").Run.SetColor(0, 255, 0);
		else privateFillCell(nCurRow, 3, "no").Run.SetColor(255, 0, 0);
		}
		privateFillCell(nCurRow, 4, oCommentInfo["CommentMessage"] ? oCommentInfo["CommentMessage"] : "");
		privateFillCell(nCurRow, 5, oCommentInfo["QuoteText"] ? oCommentInfo["QuoteText"] : "");
	}
	var oMergedCell = oTable.MergeCells(arrCells);
	if (oMergedCell) {
		var oCellContent = oMergedCell.GetContent();
		oCellContent.GetElement(0).AddText(sUserName);
	} else if (arrCells.length > 0) {
		oCellContent = arrCells[0].GetContent();
		oCellContent.GetElement(0).AddText(sUserName);
	}
}
oTable.SetStyle(oDocument.GetStyle("Bordered"));
builder.SaveFile("docx", "GetCommentsReport.docx");
builder.CloseFile();
```