# ISNA

Checks whether a value is &lt;em&gt;#N/A&lt;/em&gt;, and returns **true** or **false**.

## Syntax

expression.ISNA(arg1);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) | string | number | boolean | [ApiName](../../ApiName/ApiName.md) |  | The value to test. The value can be an empty cell, error, logical value, text, number, range, or range name. |

## Returns

boolean

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.ISNA("#N/A"));
oWorksheet.GetRange("A2").SetValue(oFunction.ISNA(255));
oWorksheet.GetRange("A3").SetValue(oFunction.ISNA("www.example.com"));
```
