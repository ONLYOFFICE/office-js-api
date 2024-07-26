# SetVertAlign

Specifies the alignment which will be applied to the contents of the run in relation to the default appearance of the run text:* **"baseline"** - the characters in the current text run will be aligned by the default text baseline.* **"subscript"** - the characters in the current text run will be aligned below the default text baseline.* **"superscript"** - the characters in the current text run will be aligned above the default text baseline.

## Syntax

expression.SetVertAlign(sType);

`expression` - A variable that represents a [ApiTextPr](../ApiTextPr.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Required | "baseline" &#124;"subscript" &#124;"superscript" |  | The vertical alignment type applied to the text contents. |

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

This example specifies the alignment which will be applied to the contents of the current run in relation to the default appearance of the text run.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("This is just a sample text. ");
oParagraph.AddElement(oRun);
var oMyNewRunStyle1 = oDocument.CreateStyle("My New Run Style 1", "run");
var oTextPr1 = oMyNewRunStyle1.GetTextPr();
oTextPr1.SetVertAlign("subscript");
oRun = Api.CreateRun();
oRun.SetStyle(oMyNewRunStyle1);
oRun.AddText("This is a text run with the text aligned below the baseline vertically. ");
oParagraph.AddElement(oRun);
var oMyNewRunStyle2 = oDocument.CreateStyle("My New Run Style 2", "run");
var oTextPr2 = oMyNewRunStyle2.GetTextPr();
oTextPr2.SetVertAlign("baseline");
oRun = Api.CreateRun();
oRun.SetStyle(oMyNewRunStyle2);
oRun.AddText("This is a text run with the text aligned by the baseline vertically. ");
oParagraph.AddElement(oRun);
var oMyNewRunStyle3 = oDocument.CreateStyle("My New Run Style 3", "run");
var oTextPr3 = oMyNewRunStyle3.GetTextPr();
oTextPr3.SetVertAlign("superscript");
oRun = Api.CreateRun();
oRun.SetStyle(oMyNewRunStyle3);
oRun.AddText("This is a text run with the text aligned above the baseline vertically.");
oParagraph.AddElement(oRun);
```
