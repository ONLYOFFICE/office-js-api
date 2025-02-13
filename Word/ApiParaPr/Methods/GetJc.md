# GetJc

Returns the paragraph contents justification.

## Syntax

```javascript
expression.GetJc();
```

`expression` - A variable that represents a [ApiParaPr](../ApiParaPr.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"left" | "right" | "both" | "center" | undefined

## Example

This example shows how to get the paragraph contents justification.

```javascript
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let paraPr = paragraph.GetParaPr();
paragraph.AddText("This is a paragraph with the text in it aligned by the center. ");
paragraph.AddText("The justification is specified in the paragraph style. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes.");
paraPr.SetJc("center");
let paraJc = paraPr.GetJc();
paragraph = Api.CreateParagraph();
paragraph.AddText("Justification: " + paraJc);
doc.Push(paragraph);
```
