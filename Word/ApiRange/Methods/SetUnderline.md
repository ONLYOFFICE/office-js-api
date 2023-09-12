# SetUnderline

Specifies that the contents of the current Range are displayed along with a line appearing directly below the character (less than all the spacing above and below the characters on the line).

## Syntax

expression.SetUnderline(isUnderline);

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| isUnderline | Required | Boolean | Specifies if the contents of the current Range are displayed underlined or not. |

## Returns

[ApiRange](../ApiRange.md) &#124; null (returns null if can't apply underline)

## Example

This example specifies that the contents of the current Range are displayed along with a line appearing directly below the character.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("ONLYOFFICE Document Builder");
var oRange = oDocument.GetRange(0, 24);
oRange.SetUnderline(true);
builder.SaveFile("docx", "SetUnderline.docx");
builder.CloseFile();
```