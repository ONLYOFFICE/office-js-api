# SetCaption

Sets a string value that represents the text of the specified range of characters.

## Syntax

```javascript
expression.SetCaption(Caption);
```

`expression` - A variable that represents a [ApiCharacters](../ApiCharacters.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Caption | Required | string |  | A string value that represents the text of the specified range of characters. |

## Returns

This method doesn't return any data.

## Example

This example sets a string value that represents the text of the specified range of characters.

```javascript editor-xlsx
// How to add a label for the specified characters.

// Set a caption for the characters collection.

var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("B1");
oRange.SetValue("This is just a sample text.");
var oCharacters = oRange.GetCharacters(23, 4);
oCharacters.SetCaption("string");
```
