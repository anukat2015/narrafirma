import kludgeForUseStrict = require("../../kludgeForUseStrict");
"use strict";

var panel: Panel = {
    id: "panel_newSensemakingSessionConstruction",
    displayName: "Sensemaking construction",
    displayType: "panel",
    section: "sensemaking",
    modelClass: "NewSensemakingSessionConstruction",
    panelFields: [
        {
            id: "sensemakingSessionRecord_construction_name",
            valueType: "string",
            required: true,
            displayType: "text",
            displayName: "Name",
            displayPrompt: "Please give this construction a <strong>name</strong>."
        },
        {
            id: "sensemakingSessionRecord_construction_type",
            valueType: "string",
            valueOptions: [
                "timeline",
                "landscape",
                "story elements",
                "composite story",
                "other"
            ],
            required: true,
            displayType: "select",
            displayName: "Type",
            displayPrompt: "What <strong>type</strong> of construction is it?"
        },
        {
            id: "sensemakingSessionRecord_construction_description",
            valueType: "string",
            required: true,
            displayType: "textarea",
            displayName: "Description",
            displayPrompt: "Please <strong>describe</strong> the construction (or include a description given by participants). Your description can include links to images or documents."
        }
    ]
};

export = panel;
