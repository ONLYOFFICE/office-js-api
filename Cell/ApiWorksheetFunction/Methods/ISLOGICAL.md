# ISLOGICAL

Checks whether a value is a logical value (**true** or **false**), and returns **true** or **false**.

## Syntax

```javascript
expression.ISLOGICAL(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) | string | number | boolean | [ApiName](../../ApiName/ApiName.md) |  | The value to test. The value can be an empty cell, error, logical value, text, number, range, or range name. |

## Returns

boolean

## Example



```javascript
const oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("B3").SetValue("66");

var oFunction = Api.GetWorksheetFunction();
var result = oFunction.ISLOGICAL(oWorksheet.GetRange("B3"));
oWorksheet.GetRange("C3").SetValue(result);

```
