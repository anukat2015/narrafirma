define([], function() {
    "use strict";
    return [
        {
            id: "page_reflectOnProject",
            displayName: "Reflect on the project",
            displayType: "page",
            section: "return",
            modelClass: "ProjectModel"
        },
        {
            id: "project_reflectLabel",
            dataType: "none",
            displayType: "label",
            displayPrompt: "On this page you will answer some questions to reflect in general on the entire project."
        },
        {
            id: "project_reflect_stories",
            dataType: "string",
            required: true,
            displayType: "textarea",
            displayName: "From stories",
            displayPrompt: "What have you learned from the stories you heard in this project?"
        },
        {
            id: "project_reflect_facilitation",
            dataType: "string",
            required: true,
            displayType: "textarea",
            displayName: "About facilitation practice",
            displayPrompt: "What did you learn about your facilitation practice in this project?"
        },
        {
            id: "project_reflect_planning",
            dataType: "string",
            required: true,
            displayType: "textarea",
            displayName: "About project stories",
            displayPrompt: "What did you learn about project planning?"
        },
        {
            id: "project_reflect_ownPNI",
            dataType: "string",
            required: true,
            displayType: "textarea",
            displayName: "About own PNI",
            displayPrompt: "How has this project changed your own version of PNI?"
        },
        {
            id: "project_reflect_community",
            dataType: "string",
            required: true,
            displayType: "textarea",
            displayName: "About community",
            displayPrompt: "What have you learned about your community or organization because of this project?"
        },
        {
            id: "project_reflect_personalStrengths",
            dataType: "string",
            required: true,
            displayType: "textarea",
            displayName: "About strengths",
            displayPrompt: "What did this project teach you about your personal strengths and weaknesses?"
        },
        {
            id: "project_reflect_teamStrengths",
            dataType: "string",
            required: true,
            displayType: "textarea",
            displayName: "About team",
            displayPrompt: "What did this project teach you about your team?"
        },
        {
            id: "project_reflect_newIdeas",
            dataType: "string",
            required: true,
            displayType: "textarea",
            displayName: "Ideas",
            displayPrompt: "Describe any new ideas that came up during this project."
        },
        {
            id: "project_reflect_notes",
            dataType: "string",
            displayType: "textarea",
            displayName: "Notes",
            displayPrompt: "Enter any additional notes you'd like to remember about the project."
        }
    ];
});