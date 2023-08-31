# SetItalic

Sets the italic property to the text character.

## Syntax

expression.SetItalic(isItalic);

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| isItalic | Required | Boolean | Specifies that the contents of the current paragraph are displayed italicized. |

## Returns

[ApiParagraph](../ApiParagraph.md)

## Example

This example sets the italic property to the text character.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is a text run with the font set to italicized letters.");
oParagraph.SetItalic(true);
builder.SaveFile("docx", "SetItalic.docx");
builder.CloseFile();
```