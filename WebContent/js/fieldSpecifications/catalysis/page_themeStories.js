define([], function() {
    "use strict";
    return [
        {
            id: "page_themeStories",
            displayName: "Theme stories",
            displayType: "page",
            section: "catalysis",
            modelClass: "ProjectModel"
        },
        {
            id: "themeStoriesLabel",
            dataType: "none",
            displayType: "label",
            displayPrompt: "On this page you will derive emergent themes from the collected stories.\nThe themes will appear in your data as answers to a \"Theme\" question, creating patterns you can use."
        },
        {
            id: "themeStories",
            dataType: "none",
            displayType: "storyThemer",
            displayPrompt: "Theme stories"
        },
        {
            id: "mockupThemingLabel_unfinished",
            dataType: "none",
            displayType: "label",
            displayPrompt: "(Unfinished: The user will use this area to theme stories."
        },
        {
            id: "mockup_theming",
            dataType: "none",
            displayType: "image",
            displayConfiguration: "images/mockups/mockupTheming.png",
            displayPrompt: "It will look something like this.)"
        }
    ];
});