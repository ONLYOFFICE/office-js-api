# GetQuoteText

Returns the quote text of the current comment.

## Syntax

expression.GetQuoteText();

`expression` - A variable that represents a [ApiComment](../ApiComment.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

String &#124; undefined &#124; null

## Example

This example shows how to get the quote text of the comment.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is just a sample text");
Api.AddComment(oParagraph, "comment", "John Smith");
var aComments = oDocument.GetAllComments();
var sQuoteText = aComments[0].GetQuoteText();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Comment quote text: " + sQuoteText);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetQuoteText.docx");
builder.CloseFile();
```