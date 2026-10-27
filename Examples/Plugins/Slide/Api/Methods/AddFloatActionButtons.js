// Add floating action buttons over the editor area.

// How do I place plugin buttons over the editor area?

// Create two floating action buttons, one of them initially disabled.

window.Asc.plugin.executeMethod("AddFloatActionButtons", [
    {
        "guid": window.Asc.plugin.guid,
        "items": [
            {
                "id": "fab-insert",
                "text": "Insert",
                "hint": "Insert the generated text",
                "icons": "resources/icons/%theme-type%(light|dark)/insert%state%(normal|hover)%scale%(default).%extension%(png)"
            },
            {
                "id": "fab-settings",
                "text": "Settings",
                "hint": "Open the plugin settings",
                "disabled": true
            }
        ]
    }
]);