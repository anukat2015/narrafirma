define([], function() {
    "use strict";
    return [
        {
            id: "page_writeQuestionsAboutParticipants",
            displayName: "Write questions about participants",
            displayType: "page",
            section: "collection_design",
            modelClass: "ProjectModel"
        },
        {
            id: "project_participantQuestionsLabel",
            dataType: "none",
            displayType: "label",
            displayPrompt: "On this page you will write questions to ask people about themselves."
        },
        {
            id: "project_participantQuestionsList",
            dataType: "array",
            required: true,
            displayType: "grid",
            displayConfiguration: "panel_addParticipantQuestion",
            displayName: "Questions about people",
            displayPrompt: "These are the questions you will be asking people about themselves."
        },
        {
            id: "SPECIAL_participantQuestionRecommendations",
            dataType: "none",
            displayType: "recommendationTable",
            displayConfiguration: "participantQuestions",
            displayPrompt: "Recommendations for participant questions"
        }
    ];
});