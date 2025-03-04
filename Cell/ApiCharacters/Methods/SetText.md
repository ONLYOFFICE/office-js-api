# SetText

Sets the text for the specified characters.

## Syntax

```javascript
expression.SetText(Text);
```

`expression` - A variable that represents a [ApiCharacters](../ApiCharacters.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Text | Required | string |  | The text to be set. |

## Returns

This method doesn't return any data.

## Example

This example sets the text for the specified characters.

```javascript editor-xlsx
// Update characters collection by setting a new text.

// Set text for the characters of the range.

var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("B1");
oRange.SetValue("This is just a sample text.");
var oCharacters = oRange.GetCharacters(23, 4);
oCharacters.SetText("string");
```
