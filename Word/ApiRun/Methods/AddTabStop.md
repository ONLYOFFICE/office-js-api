# AddTabStop

Adds a tab stop to the current run.

## Syntax

```javascript
expression.AddTabStop();
```

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

This example adds a tab stop to the run.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. After it three tab stops will be added.");
run.AddTabStop();
run.AddTabStop();
run.AddTabStop();
run.AddText("This is the text which starts after the tab stops.");
paragraph.AddElement(run);
```
