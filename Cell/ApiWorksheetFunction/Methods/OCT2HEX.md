# OCT2HEX

Converts an octal number to hexadecimal.

## Syntax

expression.OCT2HEX(arg1, arg2);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | any |  | Is the octal number you want to convert. |
| arg2 | Required | any |  | Is the number of characters to use. |

## Returns

number, string, boolean

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.OCT2HEX(7777777634, 4));
```
