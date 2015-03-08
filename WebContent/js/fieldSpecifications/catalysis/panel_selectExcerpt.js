define([], function() {
    "use strict";
    return [
        {
            id: "panel_selectExcerpt",
            displayName: "Add excerpt to interpretation",
            displayType: "panel",
            section: "catalysis",
            modelClass: "SelectExcerptModel"
        },
        {
            id: "selectExcerpt_excerptsListDisplay",
            dataType: "none",
            displayType: "excerptsList",
            displayPrompt: "Collected excerpts"
        },
        {
            id: "selectExcerpt_addExcerptToInterpretationButton",
            dataType: "none",
            displayType: "button",
            displayPrompt: "Add selected excerpt to interpretation"
        }
    ];
});