# RemoveAllElements

Removes all the elements from the current inline text content control.

## Syntax

```javascript
expression.RemoveAllElements();
```

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

This example clears the contents from the content control.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
paragraph.AddInlineLvlSdt(inlineLvlSdt);
inlineLvlSdt.AddText("This is an inline text content control.");
inlineLvlSdt.RemoveAllElements();
inlineLvlSdt.AddText("We removed all the inline content control elements.");
```
