# GetTextPr

Specifies the text properties which will be applied to the text in the current numbering level itself, not to the text in the subsequent paragraph.\
💡 To change the text style of the paragraph, a style must be applied to it using the [ApiRun#SetStyle](../../ApiRun/Methods/SetStyle.md) method.

## Syntax

```javascript
expression.GetTextPr();
```

`expression` - A variable that represents a [ApiNumberingLevel](../ApiNumberingLevel.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

This example shows how to get the text properties which will be applied to the text in the numbering level itself, not to the text in the subsequent paragraph.

```javascript editor-docx
let doc = Api.GetDocument();
let numbering = doc.CreateNumbering("numbered");
let numLvl = numbering.GetLevel(0);
let textPr = numLvl.GetTextPr();
textPr.SetBold(true);
textPr.SetFontFamily("Calibri");
textPr.SetFontSize(28);
let paragraph = doc.GetElement(0);
paragraph.SetNumbering(numLvl);
paragraph.AddText("This is the first element of a numbered list which starts with '1'");
paragraph = Api.CreateParagraph();
paragraph.SetNumbering(numLvl);
paragraph.AddText("This is the second element of a numbered list which starts with '2'");
doc.Push(paragraph);
```
