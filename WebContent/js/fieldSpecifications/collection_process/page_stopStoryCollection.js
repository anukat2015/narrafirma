define([], function() {
    "use strict";
    return [
        {
            id: "page_stopStoryCollection",
            displayName: "Stop story collection",
            displayType: "page",
            section: "collection_process",
            modelClass: "ProjectModel"
        },
        {
            id: "webStoryCollection_stopCollectionLabel2",
            dataType: "none",
            displayType: "label",
            displayPrompt: "If you are doing story collection over the internet, click this button to make the web form unavailable (to anyone but yourself). You can re-enable story collection later by going back to a previous page."
        },
        {
            id: "webStoryCollection_disableWebStoryFormAfterStoryCollectionButton",
            dataType: "none",
            displayType: "button",
            displayConfiguration: "storyCollectionStop",
            displayPrompt: "Disable web story collection"
        },
        {
            id: "webStoryCollection_enabledTracker2",
            dataType: "none",
            displayType: "function",
            displayConfiguration: "isStoryCollectingEnabled",
            displayPrompt: "Web story collection enabled:"
        }
    ];
});