# Last

Returns the last element of the paragraph which is not empty.

## Syntax

expression.Last();

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[ParagraphContent](../../../Enumerations/ParagraphContent.md) &#124; null

## Example

This example shows how to get the last element of the paragraph which is not empty.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRun_1 = Api.CreateRun();
oRun_1.AddText("This is an Run with text. ");
oParagraph.Push(oRun_1);
var oRun_2 = Api.CreateRun();
oRun_2.AddText("And this is the last Run in the paragraph.");
oParagraph.Push(oRun_2);
var oLastRun = oParagraph.Last();
oLastRun.SetBold(true);
builder.SaveFile("docx", "Last.docx");
builder.CloseFile();
```