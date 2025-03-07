# SelectCurrentWord

Selects the current word if it is possible.

## Syntax

```javascript
expression.SelectCurrentWord();
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

object

## Example

This example shows how to select the current word.

```javascript editor-docx
let doc = Api.GetDocument();
let para1 = doc.GetElement(0);
let run = para1.AddText("The quick brown fox jumps over the lazy dog");
run.MoveCursorToPos(16);

doc.SelectCurrentWord();

let para2 = Api.CreateParagraph();
para2.AddText("The selected text is " + doc.GetRangeBySelect().GetText());
doc.Push(para2);

```
