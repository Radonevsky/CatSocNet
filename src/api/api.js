import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "75b330fd-7728-402d-a06e-4f0f4a361963"
    }
})

export const usersAPI = {

    getUsers(currentPage, pageSize) {

        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    getProfile(userId) {
        console.warn('Obsolete method. Please use profileAPI object')
        return profileAPI.getProfile(userId)
    },

    clickUnFollow(id) {
        return instance.delete(`follow/${id}`)
    },

    clickFollow(id) {
        return instance.post(`follow/${id}`)
    }

}

export const profileAPI = {

    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    },

    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },

    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
    }
}


export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },

    login(formData) {
      return instance.post('auth/login',
          {email: formData.email,
          password: formData.password,
          rememberMe: formData.rememberMe})
    }
}