# ASIN

Returns the arcsine of a number in radians, in the range from &lt;em&gt;-Pi/2&lt;/em&gt; to &lt;em&gt;Pi/2&lt;/em&gt;.

## Syntax

```javascript
expression.ASIN(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The angle sine. It must be from -1 to 1. |

## Returns

number

## Example

This example shows how to return the arcsine of a number in radians, in the range from Pi/2 to Pi/2.

```javascript editor-xlsx
// How to get an arcsine of a number in radians.

// Use function to get an arcsine of a number and display it in the worksheet.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.ASIN(0.25));
```
