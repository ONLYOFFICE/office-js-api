# AddText

Adds a text to the current content control.

## Syntax

expression.AddText(sText);

`expression` - A variable that represents a [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sText | Required | String | The text which will be added to the content control. |

## Returns

Boolean (returns false if param is invalid)

## Example

This example adds a text to the content control.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oBlockLvlSdt = Api.CreateBlockLvlSdt();
oBlockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control.");
oDocument.AddElement(0, oBlockLvlSdt);
builder.SaveFile("docx", "AddText.docx");
builder.CloseFile();
```