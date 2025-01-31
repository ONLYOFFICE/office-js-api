# CSCH

Returns the hyperbolic cosecant of an angle.

## Syntax

```javascript
expression.CSCH(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number |  | The angle in radians for which the hyperbolic cosecant will be calculated. Its absolute value must be less than &lt;em&gt;2^27&lt;/em&gt;. |

## Returns

number

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.CSCH(0.785398));
```
