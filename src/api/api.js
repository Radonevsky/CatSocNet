import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "9f54c27c-b271-4209-abc9-2710b351d325"
    }
});

export const usersAPI = {

    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    },

    getProfile(userId) {
        console.warn('Obsolete method. Please use profileAPI object');
        return profileAPI.getProfile(userId);
    },

    clickUnFollow(id) {
        return instance.delete(`follow/${id}`);
    },

    clickFollow(id) {
        return instance.post(`follow/${id}`);
    }

}

export const profileAPI = {

    getProfile(userId) {
        return instance.get(`profile/${userId}`);
    },

    getStatus(userId) {
        return instance.get(`profile/status/${userId}`);
    },

    updateStatus(status) {
        return instance.put(`profile/status`, {status: status});
    },

    setNewAva(ava) {
        const formData = new FormData();
        formData.append('image', ava)
        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },

    setNewProfileInfo(data) {
        return instance.put('profile', data);
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    },

    login(formData) {
        console.log('request...');

        return instance.post('auth/login',
            {
                email: formData.email,
                password: formData.password,
                rememberMe: formData.rememberMe
            });
    },

    logout() {
        console.log('request...');
        return instance.delete('auth/login');
    }
}