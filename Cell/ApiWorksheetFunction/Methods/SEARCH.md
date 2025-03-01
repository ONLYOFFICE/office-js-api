# SEARCH

Returns the number of the character at which a specific character or text string is first found, reading left to right (not case-sensitive).

## Syntax

```javascript
expression.SEARCH(arg1, arg2, arg3);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | The text to find. The ? and * wildcard characters can be used. Use ~? and ~* to find the ? and * characters. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | The text where to search for the specified text. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The character number in the search text, counting from the left, at which to start searching. If omitted, 1 is used. |

## Returns

number

## Example

This example shows how to return the number of the character at which a specific character or text string is first found, reading left to right (not case-sensitive).

```javascript editor-xlsx
// How to get number of characters counting from first occurance of search text.

// Use a function to count characters starting from the index at which the search text appears.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.SEARCH("line", "Online Office"));
```
