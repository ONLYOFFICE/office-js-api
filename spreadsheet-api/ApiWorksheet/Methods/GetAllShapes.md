# GetAllShapes

Returns all shapes from the current sheet.

## Syntax

```javascript
expression.GetAllShapes();
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiShape](../../ApiShape/ApiShape.md)[]

## Example

This example shows how to get all shapes from the sheet.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let gradientStop1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
let gradientStop2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
let fill = Api.CreateLinearGradientFill([gradientStop1, gradientStop2], 5400000);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let shapes = worksheet.GetAllShapes();
let content = shapes[0].GetContent();
content.RemoveAllElements();
shapes[0].SetVerticalTextAlign("bottom");
let paragraph = Api.CreateParagraph();
paragraph.SetJc("left");
paragraph.AddText("We removed all elements from the shape and added a new paragraph inside it ");
paragraph.AddText("aligning it vertically by the bottom.");
content.Push(paragraph);
```
