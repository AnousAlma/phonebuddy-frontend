import FLASK_HTTPS from './_FLASK_API';

const routeName = '/users';

export const UsersAPI = {

  createUser: async (user) => {
    const res = await FLASK_HTTPS.put(routeName + '/user', {
      user
    });
    return res.data.user;
  },

  getUser: async (userID) => {
    const res = await FLASK_HTTPS.get(routeName + '/user/' + userID);
    return res.data.user;
  },

  login: async () => {
    const res = await FLASK_HTTPS.get(routeName + '/user/auth');
    return res.data.user;
  },

  updateUser: async (userID, userData) => {
    const res = await FLASK_HTTPS.patch(routeName + '/user/' + userID, userData);
    return res.data.user;
  },
  
  deleteUser: async (userID) => {
    const res = await FLASK_HTTPS.delete(routeName + '/user/' + userID);
    return res.data.user;
  }
  
};
