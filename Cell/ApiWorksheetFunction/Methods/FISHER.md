# FISHER

Returns the Fisher transformation.

## Syntax

```javascript
expression.FISHER(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The value for the transformation, a number between -1 and 1, excluding -1 and 1. |

## Returns

number

## Example

This example shows how to get a Fisher transformation.

```javascript editor-xlsx
// How to get a Fisher transformation.

// Use function to find out a Fisher transformation.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.FISHER(0.56);
oWorksheet.GetRange("B2").SetValue(ans);



```
