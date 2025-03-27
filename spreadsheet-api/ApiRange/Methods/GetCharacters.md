# GetCharacters

Returns the ApiCharacters object that represents a range of characters within the object text. Use the ApiCharacters object to format characters within a text string.

## Syntax

```javascript
expression.GetCharacters(Start, Length);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Start | Required | number |  | The first character to be returned. If this argument is either 1 or omitted, this property returns a range of characters starting with the first character. |
| Length | Required | number |  | The number of characters to be returned. If this argument is omitted, this property returns the remainder of the string (everything after the Start character). |

## Returns

[ApiCharacters](../../ApiCharacters/ApiCharacters.md)

## Example

This example shows how to get the ApiCharacters object that represents a range of characters within the object text.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(9, 4);
let font = characters.GetFont();
font.SetBold(true);
```
