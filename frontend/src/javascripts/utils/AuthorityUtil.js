
var AuthorityUtil = {

    checkAuthority(page, now_user, content){
        switch(page){
            case "PostSection":
                switch(now_user.role){
                    case "root":
                        history.replaceState('', '', '/notee/users');
                        location.reload();
                    default:
                        return true;
                }
            case "PostSectionEdit":
                switch(now_user.role){
                    case "writer":
                        if(now_user.id != content.user_id) {
                            history.replaceState('', '', '/notee/posts');
                            location.reload();
                        }
                    case "root":
                        history.replaceState('', '', '/notee/users');
                        location.reload();
                    default:
                        return true;
                }
            case "CategorySection":
                switch(now_user.role){
                    case "root":
                        history.replaceState('', '', '/notee/users');
                        location.reload();
                    default:
                        return true;
                }
            case "CategorySectionEdit":
                switch(now_user.role){
                    case "root":
                        history.replaceState('', '', '/notee/users');
                        location.reload();
                    default:
                        return true;
                }
            case "ImageSection":
                switch(now_user.role){
                    case "root":
                        history.replaceState('', '', '/notee/users');
                        location.reload();
                    default:
                        return true;
                }
            case "CommentSection":
                switch(now_user.role){
                    case "root":
                        history.replaceState('', '', '/notee/users');
                        location.reload();
                    default:
                        return true;
                }
            case "UserSection":
                switch(now_user.role){
                    case "writer":
                    case "editor":
                        history.replaceState('', '', '/notee/');
                        location.reload();
                    default:
                        return true;
                }
            case "UserSectionEdit":
                switch(now_user.role){
                    case "writer":
                    case "editor":
                        history.replaceState('', '', '/notee/');
                        location.reload();
                    case "root":
                        if(content != null){
                            history.replaceState('', '', '/notee/user');
                            location.reload();
                        }
                    default:
                        return true;
                }
            case "MypageSection":
                switch(now_user.role){
                    default:
                        return true;
                }
            case "MypageSectionEdit":
                switch(now_user.role){
                    case "root":
                        history.replaceState('', '', '/notee/users');
                        location.reload();
                    default:
                        return true;
                }
            case "MypageSectionEditPassword":
                switch(now_user.role){
                    case "root":
                        history.replaceState('', '', '/notee/users');
                        location.reload();
                    default:
                        return true;
                }
            case "TrashSection":
                switch(now_user.role){
                    case "root":
                        history.replaceState('', '', '/notee/users');
                        location.reload();
                    default:
                        return true;
                }
        }
    }

}

module.exports = AuthorityUtil;
