# GetPosInParent

Returns the paragraph position within its parent element.

## Syntax

```javascript
expression.GetPosInParent();
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

Number

## Example

This example shows how to get the paragraph position within its parent element.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = Api.CreateParagraph();
let run = Api.CreateRun();
run.AddText("Number of paragraph elements at this point: ");
run.AddTabStop();
run.AddText("" + paragraph.GetElementsCount());
run.AddLineBreak();
paragraph.AddElement(run);
run.AddText("Number of paragraph elements after we added a text run: ");
run.AddTabStop();
run.AddText("" + paragraph.GetElementsCount());
doc.AddElement(0, paragraph);
let blockLvlSdt = Api.CreateBlockLvlSdt();
doc.AddElement(0, blockLvlSdt);
blockLvlSdt.SetPlaceholderText("Content control");
let position = paragraph.GetPosInParent();
paragraph = doc.GetElement(position);
paragraph.SetBold(true);
```
