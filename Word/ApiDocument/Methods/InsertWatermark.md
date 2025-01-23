# InsertWatermark

Inserts a watermark on each document page.

## Syntax

expression.InsertWatermark(sText, bIsDiagonal);

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | Optional | string | "WATERMARK" | Watermark text. |
| bIsDiagonal | Optional | boolean | false | Specifies if the watermark is placed diagonally (true) or horizontally (false). |

## Returns

[ApiDrawing](../../ApiDrawing/ApiDrawing.md)

## Example

This example inserts a watermark on each document page.

```javascript
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("A watermark was inserted into this document.");
doc.InsertWatermark("Watermark");
```
