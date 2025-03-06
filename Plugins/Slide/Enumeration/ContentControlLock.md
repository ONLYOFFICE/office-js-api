# ContentControlLock

A value that defines if it is possible to delete and/or edit the content control or not:\n-**0** - only deleting,\n-**1** - disable deleting or editing,\n-**2** - only editing,\n-**3** - full access.

## Type

Enumeration

## Values

- 0
- 1
- 2
- 3


## Example

```javascript
let documents = [{
    "Props": {
        "Id": 100,
        "Tag": "CC_Tag",
        "Lock": 3
    },
    "Script": "var oParagraph = Api.CreateParagraph();oParagraph.AddText('Hello world!');Api.GetDocument().InsertContent([oParagraph]);"
}];
window.Asc.plugin.executeMethod("InsertAndReplaceContentControls", [documents]);
```
