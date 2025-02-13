# N

Converts a value to a number, dates to serial numbers, **true** to 1, error to &#123;@link global#ErrorValue ErrorValue&#125;, anything else to 0 (zero).

## Syntax

```javascript
expression.N(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number | string | boolean |  | The value to be converted. The value can be a logical value, text, or number. |

## Returns

number

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.N(false));
```
