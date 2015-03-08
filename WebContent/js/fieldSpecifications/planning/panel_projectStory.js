define([], function() {
    "use strict";
    return [
        {
            id: "panel_projectStory",
            displayName: "Project story",
            displayType: "panel",
            section: "planning",
            modelClass: "ProjectStoryModel"
        },
        {
            id: "projectStory_scenario",
            dataType: "string",
            dataOptions: ["ask me anything","magic ears","fly on the wall","project aspects","my own scenario type"],
            required: true,
            displayType: "select",
            displayName: "Scenario",
            displayPrompt: "Start by choosing a scenario for your project story."
        },
        {
            id: "projectStory_outcome",
            dataType: "string",
            dataOptions: ["colossal success","miserable failure","acceptable outcome","my own outcome"],
            required: true,
            displayType: "select",
            displayName: "Outcome",
            displayPrompt: "Now choose an outcome for your story."
        },
        {
            id: "projectStory_text",
            dataType: "string",
            required: true,
            displayType: "textarea",
            displayName: "Story",
            displayPrompt: "Now tell your project story as a future history (as though it has already happened)."
        },
        {
            id: "projectStory_name",
            dataType: "string",
            required: true,
            displayType: "text",
            displayName: "Name",
            displayPrompt: "Please name your project story."
        },
        {
            id: "projectStory_feelAbout",
            dataType: "string",
            required: true,
            displayType: "textarea",
            displayName: "Feel about",
            displayPrompt: "How do you feel about this story?"
        },
        {
            id: "projectStory_surprise",
            dataType: "string",
            required: true,
            displayType: "textarea",
            displayName: "Surprised",
            displayPrompt: "What surprised you about this story?"
        },
        {
            id: "projectStory_dangers",
            dataType: "string",
            required: true,
            displayType: "textarea",
            displayName: "Opportunities or dangers",
            displayPrompt: "Describe any opportunities or dangers you see in this story."
        }
    ];
});