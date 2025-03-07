# ContentControlPropertiesAndContent

The content control properties and contents.

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| ContentControlProperties | [ContentControlProperties](../Enumeration/ContentControlProperties.md) | The content control properties. |
| Script | string | A script that will be executed to generate the data within the content control (can be replaced with the *Url* parameter). |
| Url | string | A link to the shared file (can be replaced with the *Script* parameter). |
## Type

Object



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
