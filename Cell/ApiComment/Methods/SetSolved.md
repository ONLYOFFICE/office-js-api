# SetSolved

Marks a comment as solved.

## Syntax

```javascript
expression.SetSolved(bSolved);
```

`expression` - A variable that represents a [ApiComment](../ApiComment.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bSolved | Required | boolean |  | Specifies if a comment is solved or not. |

## Returns

This method doesn't return any data.

## Example

This example marks a comment as solved.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
let comment = range.AddComment("This is just a number.", "John Smith");
worksheet.GetRange("A3").SetValue("Comment is solved: ");
comment.SetSolved(true);
worksheet.GetRange("B3").SetValue(comment.IsSolved());
```
