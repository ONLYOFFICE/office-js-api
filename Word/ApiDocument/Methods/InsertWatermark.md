# InsertWatermark

Inserts a watermark on each document page.

## Syntax

expression.InsertWatermark(sText?, bIsDiagonal?);

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sText | Optional | String | Watermark text. Default value is "WATERMARK". |
| bIsDiagonal | Optional | Boolean | Specifies if the watermark is placed diagonally (true) or horizontally (false). Default value is "true". |

## Returns

[ApiDrawing](../../ApiDrawing/ApiDrawing.md) &#124; null

## Example

This example inserts a watermark on each document page.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("A watermark was inserted into this document.");
oDocument.InsertWatermark("Watermark");
builder.SaveFile("docx", "InsertWatermark.docx");
builder.CloseFile();
```