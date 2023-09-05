# SetControlsHighlight

Sets the highlight to the content controls from the current document.

## Syntax

expression.SetControlsHighlight(r, g, b, bNone?);

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| r | Required | [byte](../../../Enumerations/byte.md) | Red color component value. |
| g | Required | [byte](../../../Enumerations/byte.md) | Green color component value. |
| b | Required | [byte](../../../Enumerations/byte.md) | Blue color component value. |
| bNone | Optional | Boolean | Defines that highlight will not be set. Default value is "false". |

## Returns

This method doesn't return any data.

## Example

This example sets the highlight to the content controls from the document.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oBlockLvlSdt = Api.CreateBlockLvlSdt();
oBlockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control.");
oDocument.AddElement(0, oBlockLvlSdt);
oDocument.SetControlsHighlight(255, 111, 61);
builder.SaveFile("docx", "SetControlsHighlight.docx");
builder.CloseFile();
```