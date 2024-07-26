# SEARCH

Returns the number of the character at which a specific character or text string is first found, reading left to right (not case-sensitive).

## Syntax

expression.SEARCH(arg1, arg2, arg3);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | string |  | The text to find. The ? and * wildcard characters can be used. Use ~? and ~* to find the ? and * characters. |
| arg2 | Required | string |  | The text where to search for the specified text. |
| arg3 | Required | number |  | The character number in the search text, counting from the left, at which to start searching. If omitted, 1 is used. |

## Returns

number