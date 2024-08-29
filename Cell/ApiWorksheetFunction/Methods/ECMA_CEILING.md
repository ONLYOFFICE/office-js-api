# ECMA_CEILING

Rounds the number up to the nearest multiple of significance.

## Syntax

expression.ECMA_CEILING(arg1., arg2.);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1. | Required | number |  | No description provided. |
| arg2. | Required | number |  | No description provided. |

## Returns

number, string, boolean

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.ECMA_CEILING(1.567, 0.1));
```
