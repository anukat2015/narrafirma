define([], function() {
    "use strict";
    return [
        {
            id: "panel_addCollectionSessionActivity",
            displayName: "Add story collection session activity",
            displayType: "panel",
            section: "collection_design",
            modelClass: "CollectionSessionActivityModel"
        },
        {
            id: "collectionSessionActivity_name",
            dataType: "string",
            required: true,
            displayType: "text",
            displayName: "Name",
            displayPrompt: "Please give this activity a name."
        },
        {
            id: "collectionSessionActivity_type",
            dataType: "string",
            dataOptions: ["ice-breaker","sharing stories (no task)","sharing stories (simple task)","discussing stories","twice-told stories exercise","timeline exercise","landscape exercise","my own exercise","other"],
            required: true,
            displayType: "select",
            displayName: "Type",
            displayPrompt: "What type of activity is this?"
        },
        {
            id: "collectionSessionActivity_plan",
            dataType: "string",
            required: true,
            displayType: "textarea",
            displayName: "Plan",
            displayPrompt: "Describe the plan for this activity."
        },
        {
            id: "collectionSessionActivity_optionalParts",
            dataType: "string",
            required: true,
            displayType: "textarea",
            displayName: "Optional elaborations",
            displayPrompt: "Describe any optional elaborations you might or might not use in this activity."
        },
        {
            id: "collectionSessionActivity_duration",
            dataType: "string",
            required: true,
            displayType: "text",
            displayName: "Length",
            displayPrompt: "How long will this activity take?"
        },
        {
            id: "collectionSessionActivity_recording",
            dataType: "string",
            required: true,
            displayType: "textarea",
            displayName: "Recording",
            displayPrompt: "How will stories be recorded during this activity?"
        },
        {
            id: "collectionSessionActivity_materials",
            dataType: "string",
            required: true,
            displayType: "textarea",
            displayName: "Materials",
            displayPrompt: "What materials will be provided for this activity?"
        },
        {
            id: "collectionSessionActivity_spaces",
            dataType: "string",
            required: true,
            displayType: "textarea",
            displayName: "Spaces",
            displayPrompt: "What spaces will be used for this activity?"
        },
        {
            id: "collectionSessionActivity_facilitation",
            dataType: "string",
            required: true,
            displayType: "textarea",
            displayName: "Facilitation",
            displayPrompt: "What sort of facilitation will be necessary for this activity?"
        },
        {
            id: "SPECIAL_templates_storyCollectionActivities",
            dataType: "none",
            displayType: "templateList",
            displayConfiguration: "storyCollectionActivities",
            displayPrompt: "You can copy an activity from this list."
        }
    ];
});