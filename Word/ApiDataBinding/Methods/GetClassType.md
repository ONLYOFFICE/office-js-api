# GetClassType

Returns a type of the DataBinding class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [DataBinding](../ApiDataBinding) class.

## Parameters

This method doesn't have any parameters.

## Returns

"dataBinding"

## Example

This example gets a class type of the data binding and inserts it into the document.

```javascript editor-docx
let doc = Api.GetDocument();
let dataBinding = Api.CreateDataBinding("prefix", "{1672F99A-FD52-48B8-68E0-377D78AE6886}", "/content/text");
let classType = dataBinding.GetClassType();
let infoParagraph = Api.CreateParagraph();
infoParagraph.AddText("Class type: " + classType);
doc.Push(infoParagraph);
```

