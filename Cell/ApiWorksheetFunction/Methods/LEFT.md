# LEFT

Returns the specified number of characters from the start of a text string.

## Syntax

```javascript
expression.LEFT(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | The text string containing the characters to extract. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A number of the substring characters. It must be greater than or equal to 0. |

## Returns

string

## Example

This example shows how to return the specified number of characters from the start of a text string.

```javascript editor-xlsx
// How to find the number of characters starting from the index.

// Use a function to get a length of a text starting from the index.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.LEFT("Online Office", 6));
```
