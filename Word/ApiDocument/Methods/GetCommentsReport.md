# GetCommentsReport

Returns a report about all the comments added to the document.

## Syntax

```javascript
expression.GetCommentsReport();
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[CommentReport](../../Enumeration/CommentReport.md)

## Example

This example shows how to get a report about all the comments added to the document.

```javascript
let doc = Api.GetDocument();
let paragraph1 = doc.GetElement(0);
paragraph1.AddText("Commenting");
paragraph1.SetJc("center");
paragraph1.SetFontSize(24);
paragraph1.SetBold(true);
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("The Comment option allows you to leave comments on the specific words, edit and remove these comments.");
doc.Push(paragraph2);
let paragraph3 = Api.CreateParagraph();
paragraph3.AddText("All the comments will be saved and shown to other document users.");
doc.Push(paragraph3);
Api.AddComment(paragraph2, "You can also leave comment on phrases, sentences and other document parts", "John Smith");
let paragraph4 = Api.CreateParagraph();
paragraph4.AddText("In order to enable the comment option, the comment parameter must be set to true.");
doc.Push(paragraph4);
let paragraph5 = Api.CreateParagraph();
paragraph5.AddText("The document side bar will contain the Comment menu option.");
doc.Push(paragraph5);
Api.AddComment(paragraph4, "You can set the comment option in the permissions section of the document initialization", "Mark Pottato");
let commentsReport = doc.GetCommentsReport();
let paragraph = Api.CreateParagraph();
paragraph.AddLineBreak();
paragraph.AddLineBreak();
paragraph.AddText("Comments report");
doc.Push(paragraph);
let rows = 1;
for (let userName in commentsReport) {
	rows += commentsReport[userName].length;
}
let cols = 6;
let table = Api.CreateTable(cols, rows);
doc.Push(table);

function addTextToCell(cell, text) {
	return cell.GetContent().GetElement(0).AddText(text);
}
function fillCell(rowIndex, colIndex, text) {
	return addTextToCell(table.GetRow(rowIndex).GetCell(colIndex), text);
}

fillCell(0, 0, "Name");
fillCell(0, 1, "Date");
fillCell(0, 2, "");
fillCell(0, 3, "Solved");
fillCell(0, 4, "Text");
fillCell(0, 5, "Quote text");

let rowIndex = 1;
for (let userName in commentsReport) {
	let userComments = commentsReport[userName];
	let cells = [];
	for (let i = 0; i < userComments.length; ++i, ++rowIndex) {
		let commentInfo = commentsReport[userName][i];
		fillCell(rowIndex, 0, "");
		cells.push(table.GetRow(rowIndex).GetCell(0));
		fillCell(rowIndex, 1, (new Date(commentInfo["Date"])).toString());
		fillCell(rowIndex, 2, commentInfo["IsAnswer"] === true ? "answer" : "comment");
		if (commentInfo["IsAnswer"] !== true) 
		{
			if (commentInfo["IsSolved"] === true) 
				fillCell(rowIndex, 3, "yes").SetColor(0, 255, 0);
			else 
				fillCell(rowIndex, 3, "no").SetColor(255, 0, 0);
		}
		fillCell(rowIndex, 4, commentInfo["CommentMessage"] ? commentInfo["CommentMessage"] : "");
		fillCell(rowIndex, 5, commentInfo["QuoteText"] ? commentInfo["QuoteText"] : "");
	}
	let mergedCell = table.MergeCells(cells);
	if (mergedCell)
		addTextToCell(mergedCell, userName);
	else if (cells.length > 0)
		addTextToCell(cells[0], userName);
}
table.SetStyle(doc.GetStyle("Bordered"));
```
