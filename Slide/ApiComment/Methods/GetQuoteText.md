# GetQuoteText

Returns the quote text of the current comment.

## Syntax

expression.GetQuoteText();

`expression` - A variable that represents a [ApiComment](../ApiComment.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

Number

## Example

This example shows how to get the quote text of the comment.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is just a sample text");
Api.AddComment(oParagraph, "comment", "John Smith");
var aComments = oDocument.GetAllComments();
var sQuoteText = aComments[0].GetQuoteText();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Comment quote text: " + sQuoteText);
oDocument.Push(oParagraph);
```
