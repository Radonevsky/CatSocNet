import sidebarReducer from "./sidebar-reducer";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, it\'s my first React post', likesCount: '12'},
                {id: 2, message: 'Hello, how are you?', likesCount: '7'},
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'HelloWorldshik'},
                {id: 2, name: 'Yana'},
                {id: 3, name: 'Ilya'},
                {id: 4, name: 'Sonya'},
                {id: 5, name: 'Ivi'},
                {id: 6, name: 'Zemfira'},
                {id: 7, name: 'Felix'}
            ],
            messages: [
                {id: 1, message: 'Hi, world'},
                {id: 2, message: 'How are you'},
                {id: 3, message: 'What is your name'},
                {id: 4, message: 'MEW!! I am really angry'},
                {id: 5, message: 'pau, pau, rrrr'},
                {id: 6, message: 'I want to eat'},
                {id: 7, message: 'I am running, i am busy'}
            ],
            newMessageBody: ''
        },
        sidebar: {
            friends: [
                {
                    id: 1,
                    name: 'HelloWorldshik',
                    avaPath: 'https://steamcdn-a.akamaihd.net/steam/apps/1060870/capsule_616x353.jpg?t=1556484529'
                },
                {
                    id: 2,
                    name: 'Yana',
                    avaPath: 'https://u-stena.ru/upload/iblock/99b/99bf0da8990871dcf96b379f442555e7.jpg'
                },
                {
                    id: 3,
                    name: 'Ilya',
                    avaPath: 'https://st.depositphotos.com/1766887/1938/i/950/depositphotos_19385931-stock-photo-portrait-of-young-attractive-man.jpg'
                },
                {
                    id: 4,
                    name: 'Sonya',
                    avaPath: 'https://kuprod.ru/picture/thumb/1415181?original=1&crop=1&rev=1&k=cqAf7wnwYmF-HNyhbJgfSQ'
                },
                {id: 5, name: 'Ivi', avaPath: 'http://чихуахуа.рф/females/images/photo%20Berta/7.jpg'},
                {
                    id: 6,
                    name: 'Zemfira',
                    avaPath: 'https://ilike.pet/upload/iblock/dfc/dfcabab399bd4b97d26095257f1827ea.jpg'
                },
                {
                    id: 7,
                    name: 'Felix',
                    avaPath: 'https://st3.depositphotos.com/1034382/35562/i/450/depositphotos_355629356-stock-photo-white-brown-shorthair-cat-cat.jpg'
                }
            ]
        }
    },
    _callSubscriber() {
        console.log('state was changed')
    },

    getState() {
        debugger;
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }


}





export default store;
window.store = store;