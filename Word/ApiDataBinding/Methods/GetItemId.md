# GetItemId

Returns the ID associated with the DataBinding class.

## Syntax

```javascript
expression.GetItemId();
```

`expression` - A variable that represents a [DataBinding](../ApiDataBinding) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

This example gets the ID of a data binding and inserts it into the document.

```javascript editor-docx
let doc = Api.GetDocument();
let dataBinding = Api.CreateDataBinding("prefix", "{1672F99A-FD52-48B8-68E0-377D78AE6886}", "/content/text");
let id = dataBinding.GetItemId();
let infoParagraph = Api.CreateParagraph();
infoParagraph.AddText("Id of data binding: " + id);
doc.Push(infoParagraph);
```

