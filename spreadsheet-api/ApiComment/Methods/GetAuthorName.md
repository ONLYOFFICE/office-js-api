# GetAuthorName

Returns the comment author's name.

## Syntax

```javascript
expression.GetAuthorName();
```

`expression` - A variable that represents a [ApiComment](../ApiComment.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

This example shows how to get the comment author's name.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
let comment = range.AddComment("This is just a number.");
worksheet.GetRange("A3").SetValue("Comment's author: ");
worksheet.GetRange("B3").SetValue(comment.GetAuthorName());
```
