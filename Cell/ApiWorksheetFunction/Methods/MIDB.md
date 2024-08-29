# MIDB

Extracts the characters from the specified string starting from any position and is intended for languages that use the double-byte character set (DBCS) like Japanese, Chinese, Korean etc.

## Syntax

expression.MIDB(arg1, arg2, arg3);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | string |  | The text string from which to extract the characters. |
| arg2 | Required | number |  | The position of the first character to extract. The first text character is 1. |
| arg3 | Required | number |  | A number of the characters to extract, based on bytes. |

## Returns

string

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.MIDB("Online Office", 3, 4));
```
