# GetFullName

Returns the full name of the currently opened file.

## Syntax

expression.GetFullName();

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

This example gets a document name and inserts it into the document.

```javascript
var oDocument = Api.GetDocument();
var sName = Api.GetFullName();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("File name: " + sName);
```
