# GetXPath

Returns the XPath expression associated with the DataBinding class.

## Syntax

```javascript
expression.GetXPath();
```

`expression` - A variable that represents a [DataBinding](../ApiDataBinding) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

This example gets the XPath expression of a data binding and inserts it into the document.

```javascript editor-docx
let doc = Api.GetDocument();
let dataBinding = Api.CreateDataBinding("prefix", "{1672F99A-FD52-48B8-68E0-377D78AE6889}", "/content/text");
let xpath = dataBinding.GetXPath();
let infoParagraph = Api.CreateParagraph();
infoParagraph.AddText("XPath of data binding: " + xpath);
doc.Push(infoParagraph);
```

