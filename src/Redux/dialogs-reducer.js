const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'HelloWorldshik'},
        {id: 2, name: 'Yana'},
        {id: 3, name: 'Ilya'},
        {id: 4, name: 'Nikita'},
        {id: 4, name: 'Sonya'},
        {id: 5, name: 'Ivi'},
        {id: 6, name: 'Zemfira'},
        {id: 7, name: 'Felix'}
    ],
    messages: [
        {id: 1, message: 'Hi, world'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'What is your name'},
        {id: 4, message: 'Napyemsa?'},
        {id: 4, message: 'MEW!! I am really angry'},
        {id: 5, message: 'pau, pau, rrrr'},
        {id: 6, message: 'I want to eat'},
        {id: 7, message: `I'm running, i'm busy`}
    ],
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {

        case SEND_MESSAGE:
            console.log('in reducer')
            return {
                ...state,
                messages: [...state.messages, {id: 8, message: action.newMessage}]
            }
        default:
            return state;

    }
}

export const sendNewMessage = (newMessage) => ({type: SEND_MESSAGE, newMessage: newMessage});

export default dialogsReducer;