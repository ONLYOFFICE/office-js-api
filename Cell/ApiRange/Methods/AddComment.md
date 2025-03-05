# AddComment

Adds a comment to the current range.

## Syntax

```javascript
expression.AddComment(sText, sAuthor);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | Required | string |  | The comment text. |
| sAuthor | Required | string |  | The author's name (optional). |

## Returns

[ApiComment](../../ApiComment/ApiComment.md) \| null

## Example

This example adds a comment to the range.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
range.SetValue("1");
range.AddComment("This is just a number.");
worksheet.GetRange("A3").SetValue("The comment was added to the cell A1.");
worksheet.GetRange("A4").SetValue("Comment: " + range.GetComment().GetText());
```
