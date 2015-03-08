define([], function() {
    "use strict";
    return [
        {
            id: "panel_addCollectionSessionRecord",
            displayName: "Add story collection session record",
            displayType: "panel",
            section: "collection_process",
            modelClass: "CollectionSessionRecordModel"
        },
        {
            id: "collectionSessionRecord_name",
            dataType: "string",
            required: true,
            displayType: "text",
            displayName: "Name",
            displayPrompt: "Please give this session record a name."
        },
        {
            id: "collectionSessionRecord_whenWhere",
            dataType: "string",
            required: true,
            displayType: "textarea",
            displayName: "When and where",
            displayPrompt: "When and where did the session take place?"
        },
        {
            id: "collectionSessionRecord_groups",
            dataType: "string",
            required: true,
            displayType: "textarea",
            displayName: "Participant groups",
            displayPrompt: "Which participant groups were involved in this session?"
        },
        {
            id: "collectionSessionRecord_participants",
            dataType: "string",
            required: true,
            displayType: "textarea",
            displayName: "Who attended",
            displayPrompt: "Describe the participants at this session."
        },
        {
            id: "collectionSessionRecord_plan",
            dataType: "string",
            required: true,
            displayType: "textarea",
            displayName: "Plan",
            displayPrompt: "Which of your collection session plans did you follow in this session? (And did you stick to the plan?)"
        },
        {
            id: "collectionSessionRecord_notes",
            dataType: "string",
            displayType: "textarea",
            displayName: "Notes",
            displayPrompt: "Enter additional notes on the session here.\nYour notes can include links to images or other documents."
        },
        {
            id: "collectionSessionRecord_constructionsList",
            dataType: "array",
            required: true,
            displayType: "grid",
            displayConfiguration: "panel_newCollectionSessionConstruction",
            displayName: "Story collection session constructions",
            displayPrompt: "People in your story collection sessions might have created constructions\nsuch as timelines or landscapes. You can enter details about those here."
        },
        {
            id: "collectionSessionRecord_reflectionsLabel",
            dataType: "none",
            displayType: "label",
            displayPrompt: "Use the questions below to reflect on the session."
        },
        {
            id: "collectionSessionRecord_reflectionsOnChangeHeader",
            dataType: "none",
            displayType: "header",
            displayPrompt: "Change"
        },
        {
            id: "collectionSessionRecord_reflections_change_participantPerceptions",
            dataType: "string",
            required: true,
            displayType: "textarea",
            displayName: "Change in participant perceptions",
            displayPrompt: "How did the perceptions of the participants change from the start to the end of the session?"
        },
        {
            id: "collectionSessionRecord_reflections_change_yourPerceptions",
            dataType: "string",
            required: true,
            displayType: "textarea",
            displayName: "Change in facilitator perceptions",
            displayPrompt: "How did <i>your</i> perceptions change?"
        },
        {
            id: "collectionSessionRecord_reflections_change_project",
            dataType: "string",
            required: true,
            displayType: "textarea",
            displayName: "Changes to the project",
            displayPrompt: "How has the overall project changed as a result of this session?"
        },
        {
            id: "collectionSessionRecord_interactionsHeader",
            dataType: "none",
            displayType: "header",
            displayPrompt: "Interactions"
        },
        {
            id: "collectionSessionRecord_reflections_interaction_participants",
            dataType: "string",
            required: true,
            displayType: "textarea",
            displayName: "Interactions among participants",
            displayPrompt: "Describe the interactions between participants in this session."
        },
        {
            id: "collectionSessionRecord_reflections_interaction_participantsAndFacilitator",
            dataType: "string",
            required: true,
            displayType: "textarea",
            displayName: "Interactions between participants and facilitators",
            displayPrompt: "Describe interactions between participants and facilitators."
        },
        {
            id: "collectionSessionRecord_reflections_interaction_stories",
            dataType: "string",
            required: true,
            displayType: "textarea",
            displayName: "Stories",
            displayPrompt: "What did you notice about the stories people told, retold, chose, and worked with during the session?"
        },
        {
            id: "collectionSessionRecord_learningHeader",
            dataType: "none",
            displayType: "header",
            displayPrompt: "Learning"
        },
        {
            id: "collectionSessionRecord_reflections_learning_special",
            dataType: "string",
            required: true,
            displayType: "textarea",
            displayName: "Unique features",
            displayPrompt: "What was special about these people in this place on this day?"
        },
        {
            id: "collectionSessionRecord_reflections_learning_surprise",
            dataType: "string",
            required: true,
            displayType: "textarea",
            displayName: "Surprise",
            displayPrompt: "What surprised you about this session?"
        },
        {
            id: "collectionSessionRecord_reflections_learning_workedWell",
            dataType: "string",
            required: true,
            displayType: "textarea",
            displayName: "Worked and didn't work",
            displayPrompt: "Which parts of your plans for this session worked out well? Which parts didn't?"
        },
        {
            id: "collectionSessionRecord_reflections_learning_newIdeas",
            dataType: "string",
            required: true,
            displayType: "textarea",
            displayName: "New ideas",
            displayPrompt: "What new ideas did you gain from this session? What did you learn from it?"
        },
        {
            id: "collectionSessionRecord_reflections_learning_wantToRemember",
            dataType: "string",
            required: true,
            displayType: "textarea",
            displayName: "Other",
            displayPrompt: "What else do you want to remember about this session?"
        }
    ];
});