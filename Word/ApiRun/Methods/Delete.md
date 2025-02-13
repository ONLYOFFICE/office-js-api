# Delete

Deletes the current run.

## Syntax

```javascript
expression.Delete();
```

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

This method doesn't return any data.

## Example

This example deletes the run.

```javascript
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run1 = Api.CreateRun();
run1.AddText("This is run №1.");
paragraph.AddElement(run1);
let run2 = Api.CreateRun();
run2.AddText("This is run №2.");
paragraph.AddElement(run2);
run1.RemoveAllElements();
paragraph.AddLineBreak();
paragraph.AddText("The first run was removed from the document.");
```
