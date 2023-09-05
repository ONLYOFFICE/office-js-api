# GetAuthorName

Returns the comment author's name.

## Syntax

expression.GetAuthorName();

`expression` - A variable that represents a [ApiComment](../ApiComment.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

String

## Example

This example shows how to get the comment author's name.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is just a sample text");
Api.AddComment(oParagraph, "comment", "John Smith");
var aComments = oDocument.GetAllComments();
var AuthorName = aComments[0].GetAuthorName();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Author name: " + AuthorName);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetAuthorName.docx");
builder.CloseFile();
```