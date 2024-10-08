# RIGHTB

Extracts a substring from a string starting from the right-most character, based on the specified number of characters and is intended for languages that use the double-byte character set (DBCS) like Japanese, Chinese, Korean etc.

## Syntax

expression.RIGHTB(arg1, arg2);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | string |  | The text string that contains the characters to extract. |
| arg2 | Required | number |  | A number of the substring characters, based on bytes. |

## Returns

string

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.RIGHTB("Online Office", 2));
```
