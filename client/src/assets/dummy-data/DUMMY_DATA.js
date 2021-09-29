const DUMMY_DATA = {
    dummyUsersWBM1: [
        {
            key: 1,
            name: 'WenBiming',
            id: '1913142',
        },
        {
            name: 'AkumayuRA',
            id: '1913152',
        },
        {
            key: 2,
            name: 'James_Yang',
            id: '1912141',
        },
        {
            key: 3,
            name: 'ChangChang',
            id: '1924637',
        },
        {
            key: 4,
            name: 'Mr.President',
            id: '1813124',
        },
        {
            key: 5,
            name: 'LiZeyu',
            id: '9999999',
        },
    ],
    dummyUsersWBM2: [
        {
            userName: 'WenBiming',
            idUser: '1913142',
        },
        {
            userName: 'AkumayuRA',
            idUser: '1913152',
        },
        {
            userName: 'James_Yang',
            idUser: '1912141',
        },
        {
            userName: 'ChangChang',
            idUser: '1924637',
        },
        {
            userName: 'Mr.President',
            idUser: '1813124',
        },
        {
            name: 'LiZeyu',
            idUser: '9999999',
        },
    ],
    dummyUsersInfoWJJ: [
        {
            idUser: 1,
            userName: 'Akiyama',
        },
        {
            idUser: 2,
            userName: 'ParadoxHzy',
        },
        {
            idUser: 3,
            userName: 'James Yang',
        },
        {
            idUser: 4,
            userName: 'Senior 1 LPY',
        },
        {
            idUser: 5,
            userName: 'Old Yu',
        },
        {
            idUser: 6,
            userName: 'Senior 2 ZJY',
        },
    ],
    dummyUsersWJJ: [
        {
            username: 'AkiyamaKunka',
            email: 'junjia.wang@wisc.edu',
        },
        {
            username: 'JamesYang',
            email: 'youyi.yang@nankai.edu',
        },
        {
            username: 'ParadoxHzy',
            email: 'ziyi.huang@nankai.edu',
        },
        {
            username: 'HaoranYu',
            email: 'haoran.yu@uiuc.edu',
        },
    ],
    dummySessionsInfoWJJ: [
        {
            idSession: '1',
            sessionName: 'Financial Reduction',
            owner: '1',
            ownerName: 'Akiyama',
            sessionUrl: '/dummySession-akiyama',
            createDate: '1st Aug',
        },
        {
            idSession: '2',
            sessionName: 'SDE Interview',
            owner: '5',
            ownerName: 'Old Yu',
            sessionUrl: '/dummySession-old-yu',
            createDate: '22th July',
        },
        {
            idSession: '3',
            sessionName: 'Chatting',
            owner: '4',
            ownerName: 'LPY',
            sessionUrl: '/dummySession-lpy',
            createDate: '2nd Aug',
        },
    ],
    dummyTeamInfoWBM: [
        {
            idTeam: '1',
            teamName: 'LucyRiver',
            owner: 'WJJ',
            members: [
                'WJJ',
                'WBM',
                'ChangChang',
                'JamesYang',
                'President',
                'LZY',
            ],
            createTime: '22th July',
            description: 'nothing to say',
        },
    ],

    dummyTeamsInfoWBM2: {
        userOwnTeams: [{ idTeam: '', teamName: 'Loading...' }],
        userInTeams: [{ idTeam: '', teamName: 'Loading...' }],
    },

    dummyTeamMemberInfoWBM3: {
        '': [{ userName: '', idUser: '' }],
    },
    dummyTeamMemberInfoWBM4 : [{ userName: '', idUser: '' },]
}
export default DUMMY_DATA
