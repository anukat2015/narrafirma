define([], function() {
    "use strict";
    return [
        {
            id: "page_finalizeQuestionForms",
            displayName: "Print question forms",
            displayType: "page",
            section: "collection_process",
            modelClass: "ProjectModel"
        },
        {
            id: "printQuestionsForm_introduction",
            dataType: "none",
            displayType: "label",
            displayPrompt: "On this page you can print your story questions form for distribution to participants.\nYou can later enter the results from each form into the system."
        },
        {
            id: "printQuestionsForm_printFormButton",
            dataType: "none",
            displayType: "button",
            displayConfiguration: "printStoryForm",
            displayPrompt: "Print story form"
        }
    ];
});