# SetTrackRevisions

Sets the change tracking mode.

## Syntax

expression.SetTrackRevisions(isTrack);

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| isTrack | Required | Boolean | Specifies if the change tracking mode is set or not. |

## Returns

This method doesn't return any data.

## Example

This example sets the change tracking mode.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oDocument.SetTrackRevisions(true);
oParagraph.AddText("Track revisions mode was set.");
builder.SaveFile("docx", "SetTrackRevisions.docx");
builder.CloseFile();
```