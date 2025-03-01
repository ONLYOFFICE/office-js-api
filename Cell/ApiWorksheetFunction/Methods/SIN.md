# SIN

Returns the sine of an angle.

## Syntax

```javascript
expression.SIN(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The angle in radians for which the sine will be returned. If your argument is in degrees, multiply it by &lt;em&gt;PI()/180&lt;/em&gt;. |

## Returns

number

## Example

This example shows how to return the sine of an angle.

```javascript editor-xlsx
// How to calaculate the sine of a number.

// Use a function to get a sine of a number.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.SIN(0.5));
```
