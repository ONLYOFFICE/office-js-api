# GetCurrentPage

Returns the index of the current page.

## Syntax

```javascript
expression.GetCurrentPage();
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

This example shows how to get current page index

```javascript editor-docx
var oDocument = Api.GetDocument();
var oParagraph = Api.CreateParagraph();
oParagraph.AddText("The current page index is: " + oDocument.GetCurrentPage());
oDocument.Push(oParagraph);
```
