# GetLastRunWithText

Returns the last Run with text in the current paragraph.

## Syntax

```javascript
expression.GetLastRunWithText();
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiRun](../../ApiRun/ApiRun.md)

## Example

This example shows how to get the last Run with text in the paragraph.

```javascript
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
for (let i = 0; i < 5; ++i) {
	let run = Api.CreateRun();
	run.AddText("This run # " + (i + 1));
	paragraph.Push(run);
	paragraph.AddLineBreak();
}
let lastRun = paragraph.GetLastRunWithText();
lastRun.AddText(" Last run.");
```
