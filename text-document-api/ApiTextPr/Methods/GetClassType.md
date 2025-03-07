# GetClassType

Returns a type of the ApiTextPr class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiTextPr](../ApiTextPr.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"textPr"

## Example

This example gets a class type and pastes it into the presentation.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a sample text with the font size set to 30 and the font weight set to bold.");
let textPr = Api.CreateTextPr();
textPr.SetFontSize(32);
textPr.SetBold(true);
paragraph.SetTextPr(textPr);
textPr = paragraph.GetTextPr();
let classType = textPr.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class type: " + classType);
doc.Push(paragraph);
```
