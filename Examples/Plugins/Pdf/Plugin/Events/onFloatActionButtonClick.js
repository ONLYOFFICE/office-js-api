// Handle a click on a floating action button.

// How do I react to a click on a plugin button placed over the editor area?

// Register a floating action button and log a message when it is clicked.

window.Asc.plugin.init = function() {
    let button = new Asc.ButtonFloatAction("fab-insert");
    button.text = "Insert";
    button.hint = "Insert the generated text";

    button.attachOnClick(function() {
        console.log("The floating action button has been clicked");
    });

    Asc.Buttons.registerFloatActionButtons();
};