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
let toolbarMenuTab = {
    "id": "ChatGPT",
    "text": "AI Assistant",
    "items": [toolbarMenuItem]
};
let toolbarMenuMainItem = {
    "guid": "asc.{9DC93CDB-B576-4F0C-B55E-FCC9C48DD007}",
    "tabs": [toolbarMenuTab]
};
window.Asc.plugin.executeMethod ("AddToolbarMenuItem", [[toolbarMenuMainItem]]);