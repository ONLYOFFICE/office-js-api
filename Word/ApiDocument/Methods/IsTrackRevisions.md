# IsTrackRevisions

Checks if change tracking mode is enabled or not.

## Syntax

expression.IsTrackRevisions();

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

This example checks if change tracking mode is enabled or not.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oDocument.SetTrackRevisions(true);
var bTrackRevisions = oDocument.IsTrackRevisions();
oParagraph.AddText("Change tracking is enabled: " + bTrackRevisions);
```
