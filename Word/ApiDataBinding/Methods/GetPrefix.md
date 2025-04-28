# GetPrefix

Returns the namespace prefix associated with the DataBinding class.

## Syntax

```javascript
expression.GetPrefix();
```

`expression` - A variable that represents a [DataBinding](../ApiDataBinding) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

This example gets the prefix of a data binding and inserts it into the document.

```javascript editor-docx
let doc = Api.GetDocument();
let dataBinding = Api.CreateDataBinding("prefix", "{1672F99A-FD52-48B8-68E0-377D78AE6888}", "/content/text");
let prefix = dataBinding.GetPrefix();
let infoParagraph = Api.CreateParagraph();
infoParagraph.AddText("Prefix of data binding: " + prefix);
doc.Push(infoParagraph);
```

