const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
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
        {id: 4, message: 'Nahuyarimsa?'},
        {id: 4, message: 'MEW!! I am really angry'},
        {id: 5, message: 'pau, pau, rrrr'},
        {id: 6, message: 'I want to eat'},
        {id: 7, message: 'I am running, i am busy'}
    ],
    newMessageBody: ''
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.messageBody
            }
        case SEND_MESSAGE:
            let newMessage = {id: 8, message: state.newMessageBody}
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, newMessage]
            }
        default:
            return state;

    }
}

export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, messageBody: body});
export const sendNewMessageCreator = () => ({type: SEND_MESSAGE});

export default dialogsReducer;