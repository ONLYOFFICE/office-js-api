# IsSolved

Checks if a comment is solved or not.

## Syntax

expression.IsSolved();

`expression` - A variable that represents a [ApiComment](../ApiComment.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Boolean

## Example

This example checks if a comment is solved or not.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is just a sample text");
Api.AddComment(oParagraph, "comment", "John Smith");
var aComments = oDocument.GetAllComments();
aComments[0].SetSolved(true);
var bSolved = aComments[0].IsSolved();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The comment is solved: " + bSolved);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "SetSolved.docx");
builder.CloseFile();
```