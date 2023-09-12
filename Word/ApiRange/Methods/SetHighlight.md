# SetHighlight

Specifies a highlighting color which is applied as a background to the contents of the current Range.

## Syntax

expression.SetHighlight(sColor);

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sColor | Required | [highlightColor](../../../Enumerations/highlightColor.md) | Available highlight color. |

## Returns

[ApiRange](../ApiRange.md) &#124; null (returns null if can't apply highlight)

## Example

This example specifies a highlighting color which is applied as a background to the contents of the Range.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("ONLYOFFICE Document Builder");
var oRange = oDocument.GetRange(0, 26);
oRange.SetHighlight("lightGray");
builder.SaveFile("docx", "SetHighlight.docx");
builder.CloseFile();
```