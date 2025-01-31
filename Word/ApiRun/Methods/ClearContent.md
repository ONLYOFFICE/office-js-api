# ClearContent

Clears the content from the current run.

## Syntax

```javascript
expression.ClearContent();
```

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

This method doesn't return any data.

## Example

This example clears the content from the run.

```javascript
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
run.AddText("But you will not see it in the resulting document, as it will be cleared.");
paragraph.AddElement(run);
run.ClearContent();
paragraph = Api.CreateParagraph();
run = Api.CreateRun();
run.AddText("The text in the previous paragraph cannot be seen, as it has been cleared.");
paragraph.AddElement(run);
doc.Push(paragraph);
```
