// actions
import TokenActions from '../actions/TokenActions';

var AuthorityUtil = {

    checkAuthority(page, now_user, content){

        if(!now_user){return false}
        this.checkDeleted(now_user);

        switch(page){
            case "PostSection":
                switch(now_user.role){
                    case "root":
                        history.replaceState('', '', '/notee/users');
                        location.reload();
                        break;
                    default:
                        break;
                }
                break;

            case "PostSectionEdit":
                switch(now_user.role){
                    case "writer":
                        if(now_user.id != content.user_id) {
                            history.replaceState('', '', '/notee');
                            location.reload();
                        }
                        break;
                    case "root":
                        history.replaceState('', '', '/notee/users');
                        location.reload();
                        break;
                    default:
                        break;
                }
                break;

            case "CategorySection":
                switch(now_user.role){
                    case "root":
                        history.replaceState('', '', '/notee/users');
                        location.reload();
                        break;
                    default:
                        break;
                }
                break;

            case "CategorySectionEdit":
                switch(now_user.role){
                    case "root":
                        history.replaceState('', '', '/notee/users');
                        location.reload();
                        break;
                    default:
                        break;
                }
                break;

            case "ImageSection":
                switch(now_user.role){
                    case "root":
                        history.replaceState('', '', '/notee/users');
                        location.reload();
                        break;
                    default:
                        break;
                }
                break;

            case "CommentSection":
                switch(now_user.role){
                    case "root":
                        history.replaceState('', '', '/notee/users');
                        location.reload();
                        break;
                    default:
                        break;
                }
                break;

            case "UserSection":
                switch(now_user.role){
                    case "writer":
                    case "editor":
                        history.replaceState('', '', '/notee/');
                        location.reload();
                        break;
                    default:
                        break;
                }
                break;

            case "UserSectionEdit":
                switch(now_user.role){
                    case "writer":
                    case "editor":
                        history.replaceState('', '', '/notee/');
                        location.reload();
                        break;
                    case "root":
                        if(content != null){
                            history.replaceState('', '', '/notee/users');
                            location.reload();
                            break;
                        }
                        break;
                    default:
                        break;
                }
                break;

            case "MypageSection":
                switch(now_user.role){
                    default:
                        break;
                }
                break;

            case "MypageSectionEdit":
                switch(now_user.role){
                    default:
                        break;
                }
                break;

            case "MypageSectionEditPassword":
                switch(now_user.role){
                    case "root":
                        history.replaceState('', '', '/notee/users');
                        location.reload();
                        break;
                    default:
                        break;
                }
                break;

            case "TrashSection":
                switch(now_user.role){
                    case "root":
                        history.replaceState('', '', '/notee/users');
                        location.reload();
                        break;
                    default:
                        break;
                }
                break;

        }
    },

    checkDeleted(user){
        if(user.is_deleted){
            TokenActions.delete();  // logout
        }
    }

}

module.exports = AuthorityUtil;
