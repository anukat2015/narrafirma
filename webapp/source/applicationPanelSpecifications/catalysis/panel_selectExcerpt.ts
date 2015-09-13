import kludgeForUseStrict = require("../../kludgeForUseStrict");
"use strict";

var panel: Panel = {
    id: "panel_selectExcerpt",
    panelFields: [
        {
            id: "selectExcerpt_excerptsListDisplay",
            valueType: "none",
            displayType: "excerptsList",
            displayPrompt: "Collected excerpts"
        },
        {
            id: "selectExcerpt_addExcerptToInterpretationButton",
            valueType: "none",
            displayType: "button",
            displayPrompt: "Add selected excerpt to interpretation"
        }
    ]
};

export = panel;

