# GetPrevious

Returns the previous paragraph.

## Syntax

expression.GetPrevious();

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[ApiParagraph](../ApiParagraph.md) &#124; null (returns "null" if paragraph is the first)

## Example

This example shows how to get the previous paragraph.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph1 = oDocument.GetElement(0);
oParagraph1.AddText("This is just a sample paragraph №1.");
var oParagraph2 = Api.CreateParagraph();
oParagraph2.AddText("This is just a sample paragraph №2.");
oDocument.Push(oParagraph2);
var oPreviousParagraph = oParagraph2.GetPrevious();
oPreviousParagraph.SetBold(true);
builder.SaveFile("docx", "GetPrevious.docx");
builder.CloseFile();
```