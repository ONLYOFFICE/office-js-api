# GetTimeUTC

Returns the timestamp of the comment creation in UTC format.

## Syntax

expression.GetTimeUTC();

`expression` - A variable that represents a [ApiComment](../ApiComment.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Number

## Example

This example shows how to get the timestamp of the comment creation in UTC format.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is just a sample text");
Api.AddComment(oParagraph, "comment", "John Smith");
var aComments = oDocument.GetAllComments();
aComments[0].SetTimeUTC("1672247153658");
var sTimeUTC = aComments[0].GetTimeUTC();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The timestamp of comment creation in UTC format: " + sTimeUTC);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetTimeUTC.docx");
builder.CloseFile();
```