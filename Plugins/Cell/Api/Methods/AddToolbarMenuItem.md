# AddToolbarMenuItem

Adds an item to the toolbar menu.

## Syntax

expression.AddToolbarMenuItem(items);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| items | Required | [ToolbarMenuMainItem[]](../../Enumeration/ToolbarMenuMainItem.md) |  | An array containing the main toolbar menu items. |

## Returns

This method doesn't return any data.

## Examples

**Example 1:**

```javascript
var oToolbarMenuItem = {
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
var oToolbarMenuTab = {
    "id": "ChatGPT",
    "text": "AI Assistant",
    "items": [oToolbarMenuItem]
};
var oToolbarMenuMainItem = {
    "guid": "asc.{9DC93CDB-B576-4F0C-B55E-FCC9C48DD007}",
    "tabs": [oToolbarMenuTab]
};
window.Asc.plugin.executeMethod ("AddToolbarMenuItem", [[oToolbarMenuMainItem]]);
```
