# RIGHT

Returns the specified number of characters from the end of a text string.

## Syntax

```javascript
expression.RIGHT(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | The text string that contains the characters to extract. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A number of the substring characters. If it is omitted, the function will assume it to be 1. |

## Returns

string

## Example

This example shows how to the specified number of characters from the end of a text string.

```javascript editor-xlsx
// How to get characters from the end of a string.

// Use a function to return n characters from the right part of a text.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.RIGHT("Online Office", 2));
```
