# SetVertAlign

Specifies the alignment which will be applied to the contents of this paragraph in relation to the default appearance of the paragraph text:
**"baseline"** - the characters in the current paragraph will be aligned by the default text baseline.
**"subscript"** - the characters in the current paragraph will be aligned below the default text baseline.
**"superscript"** - the characters in the current paragraph will be aligned above the default text baseline.

## Syntax

expression.SetVertAlign(sType);

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Required | "baseline" &#124; "subscript" &#124; "superscript" |  | The vertical alignment type applied to the text contents. |

## Returns

ApiParagraph, null

## Example

This example creates two paragraphs. One with vertical aligment "subscript" and another one with vertical aligment "superscript".

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is a paragraph with the text aligned below the baseline vertically.");
oParagraph.SetVertAlign("subscript");
oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is a paragraph with the text aligned above the baseline vertically.");
oParagraph.SetVertAlign("superscript");
oDocument.Push(oParagraph);
```
