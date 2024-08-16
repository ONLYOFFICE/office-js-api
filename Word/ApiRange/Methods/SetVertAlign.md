# SetVertAlign

Specifies the alignment which will be applied to the Range contents in relation to the default appearance of the Range text:**"baseline"** - the characters in the current text Range will be aligned by the default text baseline.**"subscript"** - the characters in the current text Range will be aligned below the default text baseline.**"superscript"** - the characters in the current text Range will be aligned above the default text baseline.

## Syntax

expression.SetVertAlign(sType);

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Required | "baseline" &#124;"subscript" &#124;"superscript" |  | The vertical alignment type applied to the text contents. |

## Returns

ApiRange, null

## Example

This example sets verlical aligment "superscript" for [ApiRange](../ApiRange.md).

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("ONLYOFFICE Copyright Document Builder");
var oRange = oDocument.GetRange(10, 19);
oRange.SetVertAlign("superscript");
```
