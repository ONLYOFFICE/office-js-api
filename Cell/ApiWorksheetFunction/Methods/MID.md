# MID

Returns the characters from the middle of a text string, given a starting position and length.

## Syntax

```javascript
expression.MID(arg1, arg2, arg3);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | The text string from which to extract the characters. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The position of the first character to extract. The first text character is 1. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A number of the characters to extract. |

## Returns

string

## Example

This example shows how to return the characters from the middle of a text string, given a starting position and length.

```javascript editor-xlsx
// How to get characters from the middle of the string indicating an index and length.

// Use a function to get an array of characters from the middle of a string.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.MID("Online Office", 3, 4));
```
