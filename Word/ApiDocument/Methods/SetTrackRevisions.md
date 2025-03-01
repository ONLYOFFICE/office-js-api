# SetTrackRevisions

Sets the change tracking mode.

## Syntax

```javascript
expression.SetTrackRevisions(isTrack);
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isTrack | Required | boolean |  | Specifies if the change tracking mode is set or not. |

## Returns

boolean

## Example

This example sets the change tracking mode.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
doc.SetTrackRevisions(true);
paragraph.AddText("Track revisions mode was set.");
```
