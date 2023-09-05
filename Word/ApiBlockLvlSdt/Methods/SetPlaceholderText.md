# SetPlaceholderText

Sets the placeholder text to the current content control.

## Syntax

expression.SetPlaceholderText(sText);

`expression` - A variable that represents a [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sText | Required | String | The text that will be set to the current content control. |

## Returns

Boolean

## Example

This example sets the placeholder text to the content control.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oBlockLvlSdt = Api.CreateBlockLvlSdt();
oDocument.AddElement(0, oBlockLvlSdt);
oBlockLvlSdt.SetPlaceholderText("Name");
builder.SaveFile("docx", "SetPlaceholderText.docx");
builder.CloseFile();
```