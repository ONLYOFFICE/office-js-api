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

```javascript
let oWorksheet = Api.GetActiveSheet();
let oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let oStroke = Api.CreateStroke(0, Api.CreateNoFill());
let oShape = oWorksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, oFill, oStroke, 0, 2 * 36000, 0, 3 * 36000);
let oParentSheet = oShape.GetParentSheet();

let oDocContent = oShape.GetDocContent();
let oParagraph = oDocContent.GetElement(0);
oParagraph.AddText("Parent sheet name is " + oParentSheet.GetName());
```
