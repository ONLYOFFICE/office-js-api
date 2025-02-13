# Copy

Creates a copy of an inline content control. Ignores comments, footnote references, complex fields.

## Syntax

```javascript
expression.Copy();
```

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiInlineLvlSdt](../../ApiInlineLvlSdt/ApiInlineLvlSdt.md)

## Example

This example creates a copy of an inline content control.

```javascript
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
inlineLvlSdt.AddText("This is an inline text content control.");
paragraph.AddInlineLvlSdt(inlineLvlSdt);
let copyInlineLvlSdt = inlineLvlSdt.Copy();
paragraph.AddLineBreak();
paragraph.AddInlineLvlSdt(copyInlineLvlSdt);
```
