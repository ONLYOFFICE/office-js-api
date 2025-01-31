# ATAN

Returns the arctangent of a number in radians, in the range from &lt;em&gt;-Pi/2&lt;/em&gt; to &lt;em&gt;Pi/2&lt;/em&gt;.

## Syntax

```javascript
expression.ATAN(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number |  | The angle tangent. |

## Returns

number

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.ATAN(0.25));
```
