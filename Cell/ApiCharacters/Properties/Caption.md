# Caption

The text of the specified range of characters.

## Syntax

expression.Caption; &#124; expression.Caption = Caption;

`expression` - A variable that represents a [ApiCharacters](../ApiCharacters.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| Caption | Required | String | A string value that represents the text of the specified range of characters. |

## Returns

String

## Example

This example shows how to set a string value that represents the text of the specified range of characters.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("B1");
oRange.SetValue("This is just a sample text.");
var oCharacters = oRange.GetCharacters(23, 4);
oCharacters.Caption = "string";
var oCaption = oCharacters.Caption;
Api.GetActiveSheet().GetRange("A1").SetValue("Caption: ", oCaption)
builder.SaveFile("xlsx", "Caption.xlsx");
builder.CloseFile();
```