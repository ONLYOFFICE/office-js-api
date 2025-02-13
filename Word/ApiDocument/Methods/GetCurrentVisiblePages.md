# GetCurrentVisiblePages

Returns the indexes of the currently visible pages.

## Syntax

```javascript
expression.GetCurrentVisiblePages();
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number[]

## Example

This example shows how to get current visible pages indexes

```javascript
var oDocument = Api.GetDocument();
var oParagraph = Api.CreateParagraph();
oParagraph.AddText("The current visibles pages indexes is: " + oDocument.GetCurrentVisiblePages());
oDocument.Push(oParagraph);
```
