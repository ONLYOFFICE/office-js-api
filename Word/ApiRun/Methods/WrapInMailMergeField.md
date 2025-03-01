# WrapInMailMergeField

Wraps a run in a mail merge field.

## Syntax

```javascript
expression.WrapInMailMergeField();
```

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

This example wraps a run in a mail merge field.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("Name");
paragraph.AddElement(run);
run.WrapInMailMergeField();
paragraph.AddLineBreak();
run = Api.CreateRun();
run.AddText("Surname");
paragraph.AddElement(run);
run.WrapInMailMergeField();
```
