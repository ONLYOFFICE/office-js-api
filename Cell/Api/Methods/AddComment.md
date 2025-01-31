# AddComment

Returns an array of ApiComment objects.

## Syntax

```javascript
expression.AddComment(sText, sAuthor);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | Required | string |  | The comment text. |
| sAuthor | Required | string |  | The author's name (optional). |

## Returns

[ApiComment](../../ApiComment/ApiComment.md) | null

## Example

This example adds a comment to the document.

```javascript
Api.AddComment("Comment 1", "Bob");
Api.AddComment("Comment 2" );
var arrComments = Api.GetComments();
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("Commet Text: ", arrComments[0].GetText());
oWorksheet.GetRange("B1").SetValue("Commet Author: ", arrComments[0].GetAuthorName());
```
