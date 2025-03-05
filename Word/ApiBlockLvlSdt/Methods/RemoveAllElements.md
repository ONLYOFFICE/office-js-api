# RemoveAllElements

Clears the contents from the current content control.

## Syntax

```javascript
expression.RemoveAllElements();
```

`expression` - A variable that represents a [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

This example clears the contents from the content control.

```javascript editor-docx
let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control.");
doc.AddElement(0, blockLvlSdt);
blockLvlSdt.RemoveAllElements();
let paragraph = doc.GetElement(1);
paragraph.AddText("All elements were removed from the content control.");
```
