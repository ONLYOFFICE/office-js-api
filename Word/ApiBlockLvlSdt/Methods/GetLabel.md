# GetLabel

Returns the label attribute for the current container.

## Syntax

```javascript
expression.GetLabel();
```

`expression` - A variable that represents a [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

This example shows how to get the label attribute for the container.

```javascript
let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control with a label set to it.");
blockLvlSdt.SetLabel("2147483647");
doc.AddElement(0, blockLvlSdt);
doc.GetElement(1).AddText("Label: " + blockLvlSdt.GetLabel());
```
