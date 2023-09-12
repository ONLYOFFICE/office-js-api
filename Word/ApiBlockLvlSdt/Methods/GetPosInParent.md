# GetPosInParent

Returns the content control position within its parent element.

## Syntax

expression.GetPosInParent();

`expression` - A variable that represents a [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Number (returns -1 if the content control parent doesn't exist)

## Example

This example shows how to get the content control position within its parent element.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = Api.CreateParagraph();
var oRun = Api.CreateRun();
oRun.AddText("Number of paragraph elements at this point: ");
oRun.AddTabStop();
oRun.AddText("" + oParagraph.GetElementsCount());
oRun.AddLineBreak();
oParagraph.AddElement(oRun);
oRun.AddText("Number of paragraph elements after we added a text run: ");
oRun.AddTabStop();
oRun.AddText("" + oParagraph.GetElementsCount());
oDocument.AddElement(0, oParagraph);
var oBlockLvlSdt = Api.CreateBlockLvlSdt();
oDocument.AddElement(0, oBlockLvlSdt);
var nPosition = oBlockLvlSdt.GetPosInParent();
oBlockLvlSdt = oDocument.GetElement(nPosition);
oBlockLvlSdt.SetPlaceholderText("Content control");
builder.SaveFile("docx", "GetPosInParent.docx");
builder.CloseFile();
```