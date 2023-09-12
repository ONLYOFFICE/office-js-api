# SetBold

Sets the bold property to the text character.

## Syntax

expression.SetBold(isBold);

`expression` - A variable that represents a [ApiTextPr](../ApiTextPr.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| isBold | Required | Boolean | Specifies that the contents of the current run are displayed bold. |

## Returns

[ApiTextPr](../ApiTextPr.md)

## Example

This example sets the bold property to the text character.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTextPr = oDocument.GetDefaultTextPr();
oTextPr.SetBold(true);
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("A sample text with the font weight set to bold using the text properties.");
builder.SaveFile("docx", "SetBold.docx");
builder.CloseFile();
```