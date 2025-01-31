# Select

Selects the current content control.

## Syntax

```javascript
expression.Select();
```

`expression` - A variable that represents a [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

This method doesn't return any data.

## Example

This example selects the content control.

```javascript
let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("The block text content control is selected.");
doc.AddElement(0, blockLvlSdt);
blockLvlSdt.Select();
```
