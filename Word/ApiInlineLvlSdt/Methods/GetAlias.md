# GetAlias

Returns the alias attribute for the current container.

## Syntax

```javascript
expression.GetAlias();
```

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

This example showh how to get the alias attribute for the container.

```javascript
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
let run = Api.CreateRun();
run.AddText("This is an inline text content control with alias '№1'.");
inlineLvlSdt.AddElement(run, 0);
inlineLvlSdt.SetAlias("№1");
paragraph.AddInlineLvlSdt(inlineLvlSdt);
let alias = inlineLvlSdt.GetAlias();
paragraph = Api.CreateParagraph();
paragraph.AddText("Alias: " + alias);
doc.Push(paragraph);
```
