# GetClassType

Returns a type of the ApiShape class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiShape](../ApiShape.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"shape"

## Example

This example gets a class type and inserts it into the document.

```javascript
var oWorksheet = Api.GetActiveSheet();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = oWorksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, oFill, oStroke, 0, 2 * 36000, 2, 3 * 36000);
var sClassType = oShape.GetClassType();
oWorksheet.SetColumnWidth(0, 15);
oWorksheet.SetColumnWidth(1, 10);
oWorksheet.GetRange("A1").SetValue("Class Type = ");
oWorksheet.GetRange("B1").SetValue(sClassType);
```
