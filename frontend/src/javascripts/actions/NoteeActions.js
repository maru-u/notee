import NoteeDispatcher from '../dispatcher/NoteeDispatcher'
import NoteeConstants from '../constants/NoteeConstants'

var NoteeActions = {

    notee_create: function(content) {

        NoteeDispatcher.dispatch({
            type: NoteeConstants.NOTEE_CREATE,
            content: content
        });
    },

    notee_update: function(content){
        NoteeDispatcher.dispatch({
            type: NoteeConstants.NOTEE_UPDATE,
            content: content
        });
    },
    
    notee_delete: function(notee_id){
        NoteeConstants.dispatch({
            type: NoteeConstants.NOTEE_DELETE,
            notee_id: notee_id
        });
    },

    image_create: function(content) {

        console.log(content);

        NoteeDispatcher.dispatch({
            type: NoteeConstants.IMAGE_CREATE,
            content: content
        });
    },

    image_delete: function(notee_id){
        NoteeConstants.dispatch({
            type: NoteeConstants.IMAGE_DELETE,
            notee_id: notee_id
        });
    }
    
}

module.exports = NoteeActions;