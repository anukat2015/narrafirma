require([
    "dojo/dom",
    "dojo/hash",
    "js/pointrel20150417/PointrelClient",
    "js/surveyBuilderMithril",
    "js/surveyStorage",
    "dojo/domReady!"
], function(
    dom,
    hash,
    PointrelClient,
    surveyBuilder,
    surveyStorage
){
    "use strict";
    
    /* global m */
    
    // http://localhost:8080/survey.html#project=test1&survey=one

    // TODO: Internationalize
    // TODO: Full survey
    // TODO: Cancel feedback
    // TODO: Closing page when not submitted
    // TODO: Progress when sending to server 
    
    // TODO: Should refactor code so this prefix is not also duplicated in application and buttonActions
    var narrafirmaProjectPrefix = "NarraFirmaProject-";
    
    var serverURL = "/api/pointrel20150417";
    var pointrelClient;
    
    var projectIdentifier;
    var storyCollectionIdentifier;
    
    function loadQuestionnaire(callback) {
        // Decided on how to load data: Either can get latest with one or more questionnaires, or can query all messages and filter. Went with get latest.
        
        pointrelClient.fetchLatestMessageForTopic("questionnaires", function (error, data) {
            if (error) {
                // handle an error condition
                console.log("error from request", error);
                // TODO: Translate
                // alert("Could not load survey");
                callback(error, null);
                return;
            }
            // do something with handled data
            console.log("request got data", data);
            if (data.success) {
                console.log("storyCollectionIdentifier", storyCollectionIdentifier, data.latestRecord.messageContents.change);
                var questionnaire = data.latestRecord.messageContents.change[storyCollectionIdentifier];
                if (questionnaire) {
                    callback(null, questionnaire);
                } else {
                    callback("Questionnaire not currently available", null);
                }
            } else {
                // TODO: Translate
                // alert("Problem loading questionnaire");
                callback("Problem loading questionnaire", null);
            }
        }, function(err){
  
        });
    }

    function finishedSurvey(status, completedSurvey, wizardPane) {    
        // var surveyDiv = dom.byId("surveyDiv");
        // surveyDiv.innerHTML = "Thank you for taking the survey!";
        console.log("finishedSurvey", status, finishedSurvey);
        if (status === "submitted") {
            storeQuestionnaireResult(completedSurvey, wizardPane);
        }
    } 
    
    function storeQuestionnaireResult(completedSurvey, wizardPane) {
        surveyStorage.storeSurveyResult(pointrelClient, projectIdentifier, storyCollectionIdentifier, completedSurvey, wizardPane);
    }

    function createLayout() {
        console.log("createLayout");
           
        loadQuestionnaire(function(error, questionnaire, envelope) {
            if (error) {
                console.log("Error loading questionnaire", error);
                // TODO: Translate
                document.getElementById("pleaseWaitDiv").style.display = "none";
                document.body.innerHTML += "Something went wrong loading the survey questionnaire from the server:<br>" + JSON.stringify(error);
                alert("Something went wrong loading the survey questionnaire from the server.");
                return;
            }
            console.log("got questionnaire from server", projectIdentifier, storyCollectionIdentifier, questionnaire);
            
            var surveyDiv = dom.byId("surveyDiv");
            // m.render(surveyDiv, m("div", ["Hello survey ============== b"]));
            
            surveyBuilder.buildSurveyForm(surveyDiv, questionnaire, finishedSurvey);

            // turn off initial "please wait" display
            document.getElementById("pleaseWaitDiv").style.display = "none";

        });
    }
    
    function receivedMessage() {
        // Do nothing
    }
    
    function updateServerStatus(status, message) {
        // Do nothing
        // console.log("updateServerStatus", status, message);
    }
    
    // getHashParameters derived from: http://stackoverflow.com/questions/4197591/parsing-url-hash-fragment-identifier-with-javascript
    function getHashParameters(hash) {
        var result = {};
        var match;
        // Regex for replacing addition symbol with a space
        var plusMatcher = /\+/g;
        var parameterSplitter = /([^&;=]+)=?([^&;]*)/g;
        var decode = function (s) {return decodeURIComponent(s.replace(plusMatcher, " "));};
        while (true) {
            match = parameterSplitter.exec(hash);
            if (!match) break;
            result[decode(match[1])] = decode(match[2]);
        }
        return result;
    }
    
    function initialize() {
        var configuration = getHashParameters(hash());
        console.log("configuration", configuration);    
        
        projectIdentifier = configuration["project"];
        storyCollectionIdentifier = configuration["survey"];
        console.log("configuration: projectIdentifier", projectIdentifier, "storyCollectionIdentifier", storyCollectionIdentifier);

        if (!projectIdentifier || !storyCollectionIdentifier) {
            alert("The URL does not have all the information needed to select a survey");
            document.body.innerHTML += "The URL does not have all the information needed to select a survey. Please contact the project administrator.";
            document.getElementById("pleaseWaitDiv").style.display = "none";
            return;
        }
        
        projectIdentifier = narrafirmaProjectPrefix + projectIdentifier;
        
        // TODO: Should ping server to get current user identifier in case logged in
        // TODO: Should check with server if have read and write permissions for the specific topics
        var userIdentifier = "anonymous";
        pointrelClient = new PointrelClient(serverURL, projectIdentifier, userIdentifier, receivedMessage, updateServerStatus);
        
        createLayout();
    }
    
    initialize();
});