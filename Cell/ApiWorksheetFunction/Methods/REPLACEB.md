# REPLACEB

Replaces a set of characters, based on the number of characters and the start position specified, with a new set of characters and is intended for languages that use the double-byte character set (DBCS) like Japanese, Chinese, Korean etc.

## Syntax

expression.REPLACEB(arg1, arg2, arg3, arg4);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | string |  | The text where some characters will be replaced. |
| arg2 | Required | number |  | The position of the character in the original text that will be replaced with the new text. |
| arg3 | Required | number |  | The number of characters in the original text that will be replaced, based on bytes. |
| arg4 | Required | string |  | The text that will replace characters in the original text. |

## Returns

string