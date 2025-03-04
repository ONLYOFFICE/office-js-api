# SetVertAlign

Specifies the alignment which will be applied to the contents of the run in relation to the default appearance of the run text:**"baseline"** - the characters in the current text run will be aligned by the default text baseline.**"subscript"** - the characters in the current text run will be aligned below the default text baseline.**"superscript"** - the characters in the current text run will be aligned above the default text baseline.

## Syntax

```javascript
expression.SetVertAlign(sType);
```

`expression` - A variable that represents a [ApiTextPr](../ApiTextPr.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Required | "baseline" \| "subscript" \| "superscript" |  | The vertical alignment type applied to the text contents. |

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

This example specifies the alignment which will be applied to the contents of the current run in relation to the default appearance of the text run.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
paragraph.AddElement(run);
let myNewRunStyle1 = doc.CreateStyle("My New Run Style 1", "run");
let textPr1 = myNewRunStyle1.GetTextPr();
textPr1.SetVertAlign("subscript");
run = Api.CreateRun();
run.SetStyle(myNewRunStyle1);
run.AddText("This is a text run with the text aligned below the baseline vertically. ");
paragraph.AddElement(run);
let myNewRunStyle2 = doc.CreateStyle("My New Run Style 2", "run");
let textPr2 = myNewRunStyle2.GetTextPr();
textPr2.SetVertAlign("baseline");
run = Api.CreateRun();
run.SetStyle(myNewRunStyle2);
run.AddText("This is a text run with the text aligned by the baseline vertically. ");
paragraph.AddElement(run);
let myNewRunStyle3 = doc.CreateStyle("My New Run Style 3", "run");
let textPr3 = myNewRunStyle3.GetTextPr();
textPr3.SetVertAlign("superscript");
run = Api.CreateRun();
run.SetStyle(myNewRunStyle3);
run.AddText("This is a text run with the text aligned above the baseline vertically.");
paragraph.AddElement(run);
```
