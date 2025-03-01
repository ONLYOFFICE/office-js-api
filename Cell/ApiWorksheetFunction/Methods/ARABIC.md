# ARABIC

Converts a Roman numeral to Arabic.

## Syntax

```javascript
expression.ARABIC(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | The Roman numeral to convert. |

## Returns

number

## Example

This example shows how to convert a Roman numeral to Arabic.

```javascript editor-xlsx
// How to convert numbers to Arabic numerical.

// Use function to convert numbers to Arabic numerical.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.ARABIC("MCCL"));
```
