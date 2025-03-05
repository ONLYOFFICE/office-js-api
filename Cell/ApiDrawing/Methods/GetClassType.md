# GetClassType

Returns a type of the ApiDrawing class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"drawing"

## Example

This example gets a class type and inserts it into the document.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
drawing.SetSize(120 * 36000, 70 * 36000);
drawing.SetPosition(0, 2 * 36000, 1, 3 * 36000);
let classType = drawing.GetClassType();
worksheet.SetColumnWidth(0, 15);
worksheet.SetColumnWidth(1, 10);
worksheet.GetRange("A1").SetValue("Class Type = " + classType);
```
