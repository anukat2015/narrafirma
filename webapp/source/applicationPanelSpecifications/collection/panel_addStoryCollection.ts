import kludgeForUseStrict = require("../../kludgeForUseStrict");
"use strict";

var panel: Panel = {
    id: "panel_addStoryCollection",
    displayName: "Add story collection",
    displayType: "panel",
    section: "collection",
    modelClass: "StoryCollection",
    panelFields: [
        {
            id: "storyCollection_shortName",
            valueType: "string",
            valueImmutable: true,
            required: true,
            displayType: "text",
            displayName: "Name",
            displayPrompt: "Please give this story collection a short <strong>name</strong>, so we can refer to it.<br><br><span.narrafirma-special-warning>This name cannot be changed after the story collection is created. Also, the name must be unique within the project.</span>"
        },
        {
            id: "storyCollection_questionnaireIdentifier",
            valueType: "string",
            valueImmutable: true,
            valueOptions: "/projectModel/project_storyForms",
            valueOptionsSubfield: "questionForm_shortName",
            required: true,
            displayType: "select",
            displayName: "Story form",
            displayPrompt: "Please select a <strong>story form</strong> to use for this story collection.<br><br><span.narrafirma-special-warning>The first time you choose a story form here and click the OK button below, a <strong>copy</strong> of the story form, <em>as it is at that moment</em>, will be placed into the new story collection. Any changes you make to the story form afterwards will <em>not</em> be reflected in the copy stored in the story collection. Also, you cannot change which form is used in an existing story collection. To use a different or revised form, create a new story collection.</span>"
        },
        {
            id: "storyCollection_activeOnWeb",
            valueType: "test",
            displayType: "text",
            displayReadOnly: true,
            displayName: "Web form address",
            displayPrompt: "The <strong>web address</strong> (URL) of this story collection is:"
        },
        {
            id: "storyCollection_notes",
            valueType: "string",
            required: true,
            displayType: "textarea",
            displayName: "Notes",
            displayPrompt: "You can enter <strong>notes</strong> on the story collection here."
        }
    ]
};

export = panel;
