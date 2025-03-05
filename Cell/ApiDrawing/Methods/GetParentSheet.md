# GetParentSheet

Returns the parent sheet of the current drawing.

## Syntax

```javascript
expression.GetParentSheet();
```

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiWorksheet](../../ApiWorksheet/ApiWorksheet.md)

## Example

This example show get drawing parent sheet.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let parentSheet = shape.GetParentSheet();
let content = shape.GetDocContent();
let paragraph = content.GetElement(0);
paragraph.AddText("Parent sheet name is " + parentSheet.GetName());
```
