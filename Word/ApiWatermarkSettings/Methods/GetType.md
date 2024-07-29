# GetType

Returns the type of the watermark in the document.

## Syntax

expression.GetType();

`expression` - A variable that represents a [ApiWatermarkSettings](../ApiWatermarkSettings.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[WatermarkType](../../Enumeration/WatermarkType.md)

## Example

This example gets a watermark type and pastes it into the document.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oWatermarkSettings = oDocument.GetWatermarkSettings();
var sClassType = oWatermarkSettings.GetType();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Watermark Type = " + sClassType);
oDocument.Push(oParagraph);
```
