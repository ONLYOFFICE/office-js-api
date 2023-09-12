# GetReviewReport

Returns a report about every change which was made to the document in the review mode.

## Syntax

expression.GetReviewReport();

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[ReviewReport](../../../Enumerations/ReviewReport.md)

## Example

This example shows how to get a report about every change which was made to the document in the review mode.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph1 = oDocument.GetElement(0);
oDocument.SetTrackRevisions(true);
oParagraph1.AddText("Reviewing documents");
oParagraph1.SetJc("center");
oParagraph1.SetFontSize(24);
oParagraph1.SetBold(true);
var oParagraph2 = Api.CreateParagraph();
oParagraph2.AddText("If you need to get review report, you can use Document Builder. The steps below will show how to do it.");
oDocument.Push(oParagraph2);
var oReviewReport = oDocument.GetReviewReport();
oDocument.SetTrackRevisions(false);
var oParagraph = Api.CreateParagraph();
oDocument.Push(oParagraph);
oParagraph = Api.CreateParagraph();
oDocument.Push(oParagraph);
oParagraph.AddText("Review report");
var nRows = 1;
for (let sUserName in oReviewReport) {
	nRows += oReviewReport[sUserName].length;
}
var nCols = 4;
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
privateFillCell(0, 2, "Action");
privateFillCell(0, 3, "Text");
var nCurRow = 1;
for (let sUserName in oReviewReport) {
	var arrUserChanges = oReviewReport[sUserName];
	var arrCells = [];
	for (let nIndex = 0, nCount = arrUserChanges.length; nIndex < nCount; ++nIndex, ++nCurRow) {
		var oChangeInfo = arrUserChanges[nIndex];
		arrCells.push(privateFillCell(nCurRow, 0, "").Cell);
		privateFillCell(nCurRow, 1, (new Date(oChangeInfo["Date"])).toString());
		var sType = oChangeInfo["Type"];
		if ("TextAdd" === sType) {
		privateFillCell(nCurRow, 2, "Added text");
		privateFillCell(nCurRow, 3, oChangeInfo["Value"]);
		} else if ("TextRem" === sType) {
		privateFillCell(nCurRow, 2, "Removed text");
		privateFillCell(nCurRow, 3, oChangeInfo["Value"]).Run.SetStrikeout(true);
		} else if ("TextPr" === sType) {
		privateFillCell(nCurRow, 2, "Formatted text");
		} else if ("ParaAdd" === sType) {
		privateFillCell(nCurRow, 2, "Added paragraph");
		} else if ("ParaRem" === sType) {
		privateFillCell(nCurRow, 2, "Removed paragraph");
		} else if ("ParaPr" === sType) {
		privateFillCell(nCurRow, 2, "Formatted paragraph");
		} else {
		privateFillCell(nCurRow, 2, "Unknown change");
		}
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
builder.SaveFile("docx", "GetReviewReport.docx");
builder.CloseFile();
```