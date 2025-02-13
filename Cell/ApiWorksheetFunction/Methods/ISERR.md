# ISERR

Checks whether a value is an error other than &lt;em&gt;#N/A&lt;/em&gt;, and returns **true** or **false**.

## Syntax

```javascript
expression.ISERR(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | number | string | boolean | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) |  | The value to test. The value can be an empty cell, error, logical value, text, number, range, or range name. |

## Returns

boolean

## Example



```javascript
const oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("B3").SetValue("45")
var result = oFunction.ISERROR("B3");
oWorksheet.GetRange("C3").SetValue(result)

```
