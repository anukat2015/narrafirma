import kludgeForUseStrict = require("../../kludgeForUseStrict");
"use strict";

var panel: Panel = {
    id: "panel_chooseStoryCollection",
    modelClass: "StoryCollectionChoice",
    panelFields: [
        {
            id: "storyCollection",
            valueType: "string",
            valueOptions: "/projectModel/project_storyCollections",
            valueOptionsSubfield: "storyCollection_shortName",
            required: true,
            displayType: "select",
            displayName: "Story collection",
            displayPrompt: "Choose a story collection."
        }
    ]
};

export = panel;

