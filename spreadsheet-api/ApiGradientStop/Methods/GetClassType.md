# GetClassType

Returns a type of the ApiGradientStop class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiGradientStop](../ApiGradientStop.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"gradientStop"

## Example

This example gets a class type and inserts it into the document.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let gradientStop1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
let gradientStop2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
let fill = Api.CreateLinearGradientFill([gradientStop1, gradientStop2], 5400000);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 1, 3 * 36000);
let classType = gradientStop1.GetClassType();
worksheet.SetColumnWidth(0, 15);
worksheet.SetColumnWidth(1, 10);
worksheet.GetRange("A1").SetValue("Class Type = " + classType);
```
