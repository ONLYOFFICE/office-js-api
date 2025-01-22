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

## Example

```javascript
var oToolbarMenuItem = &#123;
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
        &#123;
            "id": "onMeaningT",
            "text": "Explain text in comment"
        &#125;,
        &#123;
            "id": "onFixSpelling",
            "text": "Fix spelling & grammar"
        &#125;,
        &#123;
            "id": "onMakeLonger",
            "text": "Make longer"
        &#125;,
        &#123;
            "id": "onMakeShorter",
            "text": "Make shorter"
        &#125;
    ]
&#125;;
var oToolbarMenuTab = &#123;
    "id": "ChatGPT",
    "text": "AI Assistant",
    "items": [oToolbarMenuItem]
&#125;;
var oToolbarMenuMainItem = &#123;
    "guid": "asc.&#123;9DC93CDB-B576-4F0C-B55E-FCC9C48DD007&#125;",
    "tabs": [oToolbarMenuTab]
&#125;;
window.Asc.plugin.executeMethod ("AddToolbarMenuItem", [[oToolbarMenuMainItem]]);
