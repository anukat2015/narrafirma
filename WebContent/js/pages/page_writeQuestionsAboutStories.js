// Generated from design
"use strict";

define([], function() {

    var questions = [
        {"id":"project_storyQuestionsLabel", "type":"label", "isInReport":false, "isGridColumn":false},
        {"id":"project_storyQuestionsList", "type":"grid", "isInReport":true, "isGridColumn":true, "options":["page_addStoryQuestion"]},
        {"id":"SPECIAL_storyQuestionRecommendations", "type":"recommendationTable", "isInReport":true, "isGridColumn":false, "options":["storyQuestions"]},
        {"id":"SPECIAL_storyQuestionRecommendationsTable_unfinished", "type":"label", "isInReport":false, "isGridColumn":false},
        {"id":"SPECIAL_mockup_recTable_storyQ", "type":"image", "isInReport":true, "isGridColumn":false, "options":["images/mockups/mockupRecTable.png"]}
    ];

    function buildPage(builder, contentPane, model) {
        builder.addQuestions(questions, contentPane, model);
    }

    return {
        "id": "page_writeQuestionsAboutStories",
        "type": "page",
        "isHeader": false,
        "questions": questions,
        "buildPage": buildPage
    };
});