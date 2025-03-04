# ISREF

Checks whether a value is a reference, and returns **true** or **false**.

## Syntax

```javascript
expression.ISREF(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| string \| number \| boolean \| [ApiName](../../ApiName/ApiName.md) |  | The value to test. The value can be an empty cell, error, logical value, text, number, range, or range name. |

## Returns

boolean

## Example

This example shows how to check whether a value is a reference, and returns true or false.

```javascript editor-xlsx
// How to know whether a value is a reference.

// Use a function to find out whether a value is a reference.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.ISREF("A3"));
oWorksheet.GetRange("A2").SetValue(oFunction.ISREF(oWorksheet.GetRange("A3")));
```
