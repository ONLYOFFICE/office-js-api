# AddComment

Adds a comment to the document.

## Syntax

expression.AddComment(sText, sAuthor?);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sText | Required | String | The comment text. |
| sAuthor | Optional | String | The author's name. Default values is username. |

## Returns

[ApiComment](../../ApiComment/ApiComment.md) &#124; null (returns null if sText is invalid)

## Example

This example adds a comment to the document.

```javascript
builder.CreateFile("xlsx");
Api.AddComment("Comment 1", "Bob");
Api.AddComment("Comment 2" );
var arrComments = Api.GetComments();
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("Commet Text: ", arrComments[0].GetText());
oWorksheet.GetRange("B1").SetValue("Commet Author: ", arrComments[0].GetAuthorName());
builder.SaveFile("xlsx", "AddComment.xlsx");
builder.CloseFile();
```