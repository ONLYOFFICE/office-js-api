# RIGHTB

Extracts a substring from a string starting from the right-most character, based on the specified number of characters and is intended for languages that use the double-byte character set (DBCS) like Japanese, Chinese, Korean etc.

## Syntax

```javascript
expression.RIGHTB(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | The text string that contains the characters to extract. |
| arg2 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A number of the substring characters, based on bytes. |

## Returns

string

## Example



```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.RIGHTB("Online Office", 2));
```
