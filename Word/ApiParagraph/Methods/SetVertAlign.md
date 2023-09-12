# SetVertAlign

Specifies the alignment which will be applied to the contents of this paragraph in relation to the default appearance of the paragraph text.

## Syntax

expression.SetVertAlign(sType);

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sType | Required | [VertAlign](../../../Enumerations/VertAlign.md) | The vertical alignment type applied to the text contents. |

## Returns

[ApiParagraph](../ApiParagraph.md) &#124; null (returns null is sType is invalid)

## Example

This example creates two paragraphs. One with vertical aligment "subscript" and another one with vertical aligment "superscript".

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is a paragraph with the text aligned below the baseline vertically.");
oParagraph.SetVertAlign("subscript");
oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is a paragraph with the text aligned above the baseline vertically.");
oParagraph.SetVertAlign("superscript");
oDocument.Push(oParagraph);
builder.SaveFile("docx", "SetVertAlign.docx");
builder.CloseFile();
```