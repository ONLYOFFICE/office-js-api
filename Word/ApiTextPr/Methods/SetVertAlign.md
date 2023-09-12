# SetVertAlign

Specifies the alignment which will be applied to the contents of the current run in relation to the default appearance of the text run.

## Syntax

expression.SetVertAlign(sType);

`expression` - A variable that represents a [ApiTextPr](../ApiTextPr.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sType | Required | [VertAlign](../../../Enumerations/VertAlign.md) | The vertical alignment type applied to the text contents. |

## Returns

[ApiTextPr](../ApiTextPr.md)

## Example

This example specifies the alignment which will be applied to the contents of the current run in relation to the default appearance of the text run.

```javascript
builder.CreateFile("docx");
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
builder.SaveFile("docx", "SetVertAlign.docx");
builder.CloseFile();
```