# SetUnderline

Specifies that the contents of this paragraph are displayed along with a line appearing directly below the character (less than all the spacing above and below the characters on the line).

## Syntax

expression.SetUnderline(isUnderline);

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| isUnderline | Required | Boolean | Specifies that the contents of the current run are displayed underlined. |

## Returns

[ApiParagraph](../ApiParagraph.md)

## Example

This example specifies that the contents of this paragraph are displayed along with a line appearing directly below the character.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is a paragraph with the text underlined with a single line.");
oParagraph.SetUnderline(true);
builder.SaveFile("docx", "SetUnderline.docx");
builder.CloseFile();
```