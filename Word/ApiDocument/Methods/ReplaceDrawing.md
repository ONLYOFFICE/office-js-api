# ReplaceDrawing

Replaces a drawing with a new drawing.

## Syntax

expression.ReplaceDrawing(oOldDrawing, oNewDrawing, bSaveOldDrawingPr);

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oOldDrawing | Required | [ApiDrawing](../../ApiDrawing/ApiDrawing.md) |  | A drawing which will be replaced. |
| oNewDrawing | Required | [ApiDrawing](../../ApiDrawing/ApiDrawing.md) |  | A drawing to replace the old drawing. |
| bSaveOldDrawingPr | Optional | boolean | false | Specifies if the old drawing settings will be saved. |

## Returns

boolean

## Example

This example replaces a drawing with a new drawing.

```javascript
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let oldDrawing = Api.CreateChart("bar3D", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
let fill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
oldDrawing.SetSeriesFill(fill, 0, false);
fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
oldDrawing.SetSeriesFill(fill, 1, false);
paragraph.AddDrawing(oldDrawing);
let gs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
let gs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
fill = Api.CreateLinearGradientFill([gs1, gs2], 5400000);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let newDrawing = Api.CreateShape("rect", 5930900, 395605, fill, stroke);
let docContent = newDrawing.GetContent();
paragraph = Api.CreateParagraph();
paragraph.AddText("The chart was replaced with the current shape in this document.");
docContent.AddElement(0, paragraph);
doc.ReplaceDrawing(oldDrawing, newDrawing, false);
```
