# GetReviewReport

Returns a report about every change which was made to the document in the review mode.

## Syntax

```javascript
expression.GetReviewReport();
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ReviewReport](../../Enumeration/ReviewReport.md)

## Example

This example shows how to get a report about every change which was made to the document in the review mode.

```javascript
let doc = Api.GetDocument();
let paragraph1 = doc.GetElement(0);
doc.SetTrackRevisions(true);
paragraph1.AddText("Reviewing documents");
paragraph1.SetJc("center");
paragraph1.SetFontSize(24);
paragraph1.SetBold(true);
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("If you need to get review report, you can use Document Builder. The steps below will show how to do it.");
doc.Push(paragraph2);
let reviewReport = doc.GetReviewReport();
doc.SetTrackRevisions(false);
let paragraph = Api.CreateParagraph();
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
doc.Push(paragraph);
paragraph.AddText("Review report");
let rows = 1;
for (let userName in reviewReport) {
    rows += reviewReport[userName].length;
}
let cols = 4;
let table = Api.CreateTable(cols, rows);
doc.Push(table);

function privateFillCell(curRow, curCol, text) {
    let row = table.GetRow(curRow);
    let cell = row.GetCell(curCol);
    let cellContent = cell.GetContent();
    let run = cellContent.GetElement(0).AddText(text);
    return {
        Cell: cell,
        Run: run
    };
}
privateFillCell(0, 0, "Name");
privateFillCell(0, 1, "Date");
privateFillCell(0, 2, "Action");
privateFillCell(0, 3, "Text");
let curRow = 1;
for (let userName in reviewReport) {
    let userChanges = reviewReport[userName];
    let cells = [];
    for (let index = 0, count = userChanges.length; index < count; ++index, ++curRow) {
        let changeInfo = userChanges[index];
        cells.push(privateFillCell(curRow, 0, "").Cell);
        privateFillCell(curRow, 1, (new Date(changeInfo["Date"])).toString());
        let type = changeInfo["Type"];
        if ("TextAdd" === type) {
            privateFillCell(curRow, 2, "Added text");
            privateFillCell(curRow, 3, changeInfo["Value"]);
        } else if ("TextRem" === type) {
            privateFillCell(curRow, 2, "Removed text");
            privateFillCell(curRow, 3, changeInfo["Value"]).Run.SetStrikeout(true);
        } else if ("TextPr" === type) {
            privateFillCell(curRow, 2, "Formatted text");
        } else if ("ParaAdd" === type) {
            privateFillCell(curRow, 2, "Added paragraph");
        } else if ("ParaRem" === type) {
            privateFillCell(curRow, 2, "Removed paragraph");
        } else if ("ParaPr" === type) {
            privateFillCell(curRow, 2, "Formatted paragraph");
        } else {
            privateFillCell(curRow, 2, "Unknown change");
        }
    }
    let mergedCell = table.MergeCells(cells);
    if (mergedCell) {
        let cellContent = mergedCell.GetContent();
        cellContent.GetElement(0).AddText(userName);
    } else if (cells.length > 0) {
        cellContent = cells[0].GetContent();
        cellContent.GetElement(0).AddText(userName);
    }
}
table.SetStyle(doc.GetStyle("Bordered"));
```
