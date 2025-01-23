# RemoveAllElements

Removes all the elements from the current paragraph.
💡 When all the elements are removed from the paragraph, a new empty run is automatically created. If you want to add
content to this run, use the &#123;@link ApiParagraph#GetElement&#125; method.

## Syntax

expression.RemoveAllElements();

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

This method doesn't return any data.

## Example

This example removes all the elements from the current paragraph.

```javascript
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is the first text run in the current paragraph.");
paragraph.AddElement(run);
paragraph.RemoveAllElements();
run = Api.CreateRun();
run.AddText("We removed all the paragraph elements and added a new text run inside it.");
paragraph.AddElement(run);
doc.Push(paragraph);
```
