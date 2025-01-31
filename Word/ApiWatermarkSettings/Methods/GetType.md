# GetType

Returns the type of the watermark in the document.

## Syntax

```javascript
expression.GetType();
```

`expression` - A variable that represents a [ApiWatermarkSettings](../ApiWatermarkSettings.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[WatermarkType](../../Enumeration/WatermarkType.md)

## Example

This example gets a watermark type and pastes it into the document.

```javascript
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let watermarkSettings = doc.GetWatermarkSettings();
let classType = watermarkSettings.GetType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Watermark Type = " + classType);
doc.Push(paragraph);
```
