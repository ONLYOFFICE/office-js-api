# SelectCurrentWord

Selects the current word if it is possible.

## Syntax

expression.SelectCurrentWord();

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

object

## Example

This example shows how to select the current word.

```javascript
let oDocument = Api.GetDocument();
let oPara1 = oDocument.GetElement(0);
let oRun = oPara1.AddText("The quick brown fox jumps over the lazy dog");
oRun.MoveCursorToPos(16);

oDocument.SelectCurrentWord();

let oPara2 = Api.CreateParagraph();
oPara2.AddText("The selected text is " + oDocument.GetRangeBySelect().GetText());
oDocument.Push(oPara2);

```
