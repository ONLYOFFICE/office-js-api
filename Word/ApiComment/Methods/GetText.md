# GetText

Returns the comment text.

## Syntax

expression.GetText();

`expression` - A variable that represents a [ApiComment](../ApiComment.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

String

## Example

This example shows how to get the comment text.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is just a sample text");
Api.AddComment(oParagraph, "comment", "John Smith");
var aComments = oDocument.GetAllComments();
var sText = aComments[0].GetText();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Comment text: " + sText);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetText.docx");
builder.CloseFile();
```