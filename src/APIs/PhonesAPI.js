import FLASK_HTTPS from './_FLASK_API';

const routeName = '/phones';

export const PhonesAPI = {

  createPhone: async (phone) => {
    const res = await FLASK_HTTPS.put(routeName + '/phone', {
      phone
    });
    return res.data.phone;
  },

  getPhone: async (phoneID) => {
    const res = await FLASK_HTTPS.get(routeName + '/phone/' + phoneID); 
    return res.data.phone;
  },

  getPhones: async (filters) => {
    const params = new URLSearchParams(filters).toString();
    const res = await FLASK_HTTPS.get(`${routeName}/phone?${params}`);
    return res.data; // Include both phones and totalPages in the response
},


  updatePhone: async (phoneID, phoneData) => {
    const res = await FLASK_HTTPS.patch(routeName + '/phone/' + phoneID, phoneData);
    return res.data.phone;
  },

  deletePhone: async (phoneID) => {
    const res = await FLASK_HTTPS.delete(routeName + '/phone/' + phoneID);
    return res.data.phone;
  }
};
