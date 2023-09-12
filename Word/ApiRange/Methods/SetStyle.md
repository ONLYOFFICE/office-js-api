# SetStyle

Sets the style to the current Range.

## Syntax

expression.SetStyle(oStyle);

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| oStyle | Required | [ApiStyle](../../ApiStyle/ApiStyle.md) | The style of the paragraph to be set. |

## Returns

[ApiRange](../ApiRange.md) &#124; null (returns null if can't set style)

## Example

This example sets the style to the current Range.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("ONLYOFFICE Document Builder");
var oRange = oDocument.GetRange(0, 26);
var oStyle = oDocument.GetStyle("Heading 2");
oRange.SetStyle(oStyle);
builder.SaveFile("docx", "SetStyle.docx");
builder.CloseFile();
```