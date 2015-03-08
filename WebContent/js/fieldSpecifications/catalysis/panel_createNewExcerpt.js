define([], function() {
    "use strict";
    return [
        {
            id: "panel_createNewExcerpt",
            displayName: "Create new excerpt",
            displayType: "panel",
            section: "catalysis",
            modelClass: "CreateNewExcerptModel"
        },
        {
            id: "excerpt_name",
            dataType: "string",
            required: true,
            displayType: "text",
            displayName: "Name",
            displayPrompt: "Please give this excerpt a name."
        },
        {
            id: "excerpt_text",
            dataType: "string",
            required: true,
            displayType: "textarea",
            displayName: "Excerpt",
            displayPrompt: "You can edit the excerpt here."
        },
        {
            id: "excerpt_notes",
            dataType: "string",
            displayType: "textarea",
            displayName: "Notes",
            displayPrompt: "Enter some notes about the excerpt."
        }
    ];
});