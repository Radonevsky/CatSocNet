let initialState = {
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
            id: 43,
            name:'Nikita',
            avaPath: 'https://images.unian.net/pb/004/thumb_files/h_500/450595.jpg  '
        },
        {
            id: 4,
            name: 'Sonya',
            avaPath: 'https://forum.grodno.net/index.php?action=dlattach;topic=4146410.0;attach=2685201;image'
        },
        {id: 5, name: 'Ivi', avaPath: 'https://club.xdogs.ru/images/stati/kormlenie_toy_terera1.jpg'},
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
};

const sidebarReducer = (state = initialState, action) => {

    return state;
}

export default sidebarReducer;