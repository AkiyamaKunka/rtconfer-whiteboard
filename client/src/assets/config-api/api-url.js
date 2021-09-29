const LOCAL_ROOT_URL = 'http://127.0.0.1:8080/'
const CLOUD_ROOT_URL = 'https://lucyriver-richmedia-server.herokuapp.com/'
const ROOT_URL = CLOUD_ROOT_URL
const API_URL = {
    signUpUrl: ROOT_URL + 'user/sign-up',
    loginUrl: ROOT_URL + 'user/login',
    createSessionUrl: ROOT_URL + 'session/create-session',
    getAllSessionsUrl: ROOT_URL + 'user/get-all-session',
    deleteSessionUrl: ROOT_URL + 'session/delete-session',
    getAllUsersUrl: ROOT_URL + 'user/get-all-users',
    getAllTeamsUrl: ROOT_URL + 'user/get-all-teams',
    createTeamUrl: ROOT_URL + 'team/create-team',
    getTeamMembersUrl : ROOT_URL + 'team/get-team-members',
    addTeamMembersUrl: ROOT_URL + 'team/add-team-members',
    deleteTeamMembersUrl: ROOT_URL + 'team/delete-team-members',
    getVideoTokenUrl: ROOT_URL + 'video/apply-for-token',
    getWhiteBoardTokenUrl : ROOT_URL + 'white-board/apply-for-token',
    getImageUrl: ROOT_URL + 'white-board/get-image-url'
}
export default API_URL
