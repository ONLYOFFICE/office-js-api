# GetFontNames

Returns all font names from all elements inside the current run.

## Syntax

```javascript
expression.GetFontNames();
```

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string[]

## Example

This example shows how to get all font names from all elements inside the run.

```javascript
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.SetFontFamily("Calibri Light");
run.AddText("This is just a sample text.");
paragraph.AddElement(run);
let fontNames = run.GetFontNames();
paragraph = Api.CreateParagraph();
paragraph.AddText("Run font names: ");
paragraph.AddLineBreak();
for (let i = 0; i < fontNames.length; i++) {
	paragraph.AddText(fontNames[i]);
	paragraph.AddLineBreak();
}
doc.Push(paragraph);
```
