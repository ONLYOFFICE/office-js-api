# Delete

Deletes the ApiComment object.

## Syntax

```javascript
expression.Delete();
```

`expression` - A variable that represents a [ApiComment](../ApiComment.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

This method doesn't return any data.

## Example



```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
range.AddComment("This is just a number.");
let comment = range.GetComment();
comment.Delete();
worksheet.GetRange("A3").SetValue("The comment was just deleted from A1.");
```
