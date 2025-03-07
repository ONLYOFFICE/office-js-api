# ContentControlProperties

The content control properties.

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| Alias | string | The alias attribute. |
| Appearance | number | Defines if the content control is shown as the bounding box (**1**) or not (**2**). |
| Border | Object | The border properties. |
| Border.Color | [Color](../Enumeration/Color.md) | The border color in RGBA format. |
| Color | [Color](../Enumeration/Color.md) | The color for the current content control in RGBA format. |
| Id | string | A unique identifier of the content control. It can be used to search for a certain content control and make reference to it in the code. |
| InternalId | string | A unique internal identifier of the content control. |
| Lock | [ContentControlLock](../Enumeration/ContentControlLock.md) | A value that defines if it is possible to delete and/or edit the content control or not. |
| PlaceHolderText | string | The content control placeholder text. |
| Shd | Object | The background shading properties. |
| Shd.Color | [Color](../Enumeration/Color.md) | The shading color in RGBA format. |
| Tag | string | A tag assigned to the content control. The same tag can be assigned to several content controls so that it is possible to make reference to them in the code. |
## Type

Object



## Example

```javascript
let contentControlPr = {
    "Id" : 7,
    "Tag" : "{tag}",
    "Lock" : 0
};
window.Asc.plugin.executeMethod ("AddContentControl", [1, contentControlPr]);
```
