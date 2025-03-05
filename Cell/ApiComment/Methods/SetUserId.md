# SetUserId

Sets the user ID to the comment author.

## Syntax

```javascript
expression.SetUserId(sUserId);
```

`expression` - A variable that represents a [ApiComment](../ApiComment.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sUserId | Required | string |  | The user ID of the comment author. |

## Returns

This method doesn't return any data.

## Example

This example sets the user ID to the comment author.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
let comment = range.AddComment("This is just a number.", "John Smith");
worksheet.GetRange("A3").SetValue("Comment's user Id: ");
comment.SetUserId("uid-2");
worksheet.GetRange("B3").SetValue(comment.GetUserId());
```
