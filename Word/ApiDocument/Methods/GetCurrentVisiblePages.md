# GetCurrentVisiblePages

Returns the indexes of currently visible pages.

## Syntax

expression.GetCurrentVisiblePages();

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

Array.&lt;number&gt;

## Example

This example shows how to get current visible pages indexes

```javascript
var oDocument = Api.GetDocument();
var oParagraph = Api.CreateParagraph();
oParagraph.AddText("The current visibles pages indexes is: " + oDocument.GetCurrentVisiblePages());
oDocument.Push(oParagraph);
```
