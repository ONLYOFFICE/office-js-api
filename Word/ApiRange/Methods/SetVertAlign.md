# SetVertAlign

Specifies the alignment which will be applied to the Range contents in relation to the default appearance of the Range text.

## Syntax

expression.SetVertAlign(sType);

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sType | Required | [VertAlign](../../../Enumerations/VertAlign.md) | The vertical alignment type applied to the text contents. |

## Returns

[ApiRange](../ApiRange.md) &#124; null (returns null if can't apply align)

## Example

This example sets verlical aligment "superscript" for [ApiRange](../ApiRange.md).

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("ONLYOFFICE Copyright Document Builder");
var oRange = oDocument.GetRange(10, 19);
oRange.SetVertAlign("superscript");
builder.SaveFile("docx", "SetVertAlign.docx");
builder.CloseFile();
```