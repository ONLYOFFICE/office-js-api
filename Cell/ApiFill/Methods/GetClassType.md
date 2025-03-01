# GetClassType

Returns a type of the ApiFill class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiFill](../ApiFill.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"fill"

## Example

This example gets a class type and inserts it into the document.

```javascript editor-xlsx
// How to get a class type of ApiFill.

// Get a class type of ApiFill and display it in the worksheet.

var oWorksheet = Api.GetActiveSheet();
var oGs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
var oGs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
var oFill = Api.CreateLinearGradientFill([oGs1, oGs2], 5400000);
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
oWorksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, oFill, oStroke, 0, 2 * 36000, 1, 3 * 36000);
var sClassType = oFill.GetClassType();
oWorksheet.SetColumnWidth(0, 15);
oWorksheet.SetColumnWidth(1, 10);
oWorksheet.GetRange("A1").SetValue("Class Type = " + sClassType);
```
