# Select

Selects the current content control.

## Syntax

expression.Select();

`expression` - A variable that represents a [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

This method doesn't return any data.

## Example

This example selects the content control.

```javascript
var oDocument = Api.GetDocument();
var oBlockLvlSdt = Api.CreateBlockLvlSdt();
oBlockLvlSdt.GetContent().GetElement(0).AddText("The block text content control is selected.");
oDocument.AddElement(0, oBlockLvlSdt);
oBlockLvlSdt.Select();
```
