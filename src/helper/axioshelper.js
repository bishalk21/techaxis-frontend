import axios from 'axios';

const rootURL = process.env.REACT_APP_API_ENDPOINT;
const adminEP = rootURL + 'admin-user';

// post admin user
export const insertAdmin = async (admin) => {
    try {
        const response = await axios.post(adminEP, admin);
        return response.data;

    } catch (error) {
        return error;
    }
}