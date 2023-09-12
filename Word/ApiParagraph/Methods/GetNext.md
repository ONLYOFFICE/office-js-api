# GetNext

Returns the next paragraph.

## Syntax

expression.GetNext();

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[ApiParagraph](../ApiParagraph.md) &#124; null (returns "null" if paragraph is the last)

## Example

This example shows how to get the next paragraph.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph1 = oDocument.GetElement(0);
oParagraph1.AddText("This is just a sample paragraph №1.");
var oParagraph2 = Api.CreateParagraph();
oParagraph2.AddText("This is just a sample paragraph №2.");
oDocument.Push(oParagraph2);
var oNextParagraph = oParagraph1.GetNext();
oNextParagraph.SetBold(true);
builder.SaveFile("docx", "GetNext.docx");
builder.CloseFile();
```