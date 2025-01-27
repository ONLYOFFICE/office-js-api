# ToolbarMenuItem

The toolbar menu item.

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| id | string | The item ID. |
| type | [ToolbarMenuItemType](../Enumeration/ToolbarMenuItemType.md) | The item type. |
| text | string | The item text. |
| hint | string | The item hint. |
| icons | string | The item icons (see the plugins &#123;@link /plugin/config config&#125; documentation). |
| disabled | boolean | Specifies if the current item is disabled or not. |
| enableToggle | boolean | Specifies if an item toggle is enabled or not. |
| lockInViewMode | boolean | Specifies if the current item is locked in the view mode or not. |
| separator | boolean | Specifies if a separator is used between the toolbar menu items or not. |
| split | boolean | Specifies if the toolbar menu items are split or not. |
| items | [ContextMenuItem[]](../Enumeration/ContextMenuItem.md) | An array containing the context menu items for the current item. |
## Type

Object



## Example

```javascript
let toolbarMenuItem = {
    "id": "MeaningItem",
    "type": "button",
    "text": "Meaning",
    "hint": "Meaning",
    "icons": "resources/light/icon.png",
    "disabled": false,
    "enableToggle": false,
    "lockInViewMode": false,
    "separator": true,
    "split": true,
    "items": [
        {
            "id": "onMeaningT",
            "text": "Explain text in comment"
        },
        {
            "id": "onFixSpelling",
            "text": "Fix spelling & grammar"
        },
        {
            "id": "onMakeLonger",
            "text": "Make longer"
        },
        {
            "id": "onMakeShorter",
            "text": "Make shorter"
        }
    ]
};
```
