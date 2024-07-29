# SetTrackRevisions

Sets the change tracking mode.

## Syntax

expression.SetTrackRevisions(isTrack);

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isTrack | Required | boolean |  | Specifies if the change tracking mode is set or not. |

## Returns

This method doesn't return any data.

## Example

This example sets the change tracking mode.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oDocument.SetTrackRevisions(true);
oParagraph.AddText("Track revisions mode was set.");
```
