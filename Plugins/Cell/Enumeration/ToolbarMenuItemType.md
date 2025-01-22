# ToolbarMenuItemType

The possible values of the base which the relative vertical position of the toolbar menu item will be calculated from.

## Type

Enumeration

## Values

- "button"
- "..."


## Example

```javascript
var sToolbarMenuItemType = "button";
var oToolbarMenuItem = &#123;
    "id": "MeaningItem",
    "type": sToolbarMenuItemType,
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
