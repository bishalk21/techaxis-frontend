import axios from 'axios';

// endpoint
const endpoint = 'http://localhost:8000/api/v1';
const adminEP = 'http://localhost:8000/api/v1/admin-user';

// post admin user
export const insertAdmin = async (admin) => {
    try {
        const option = {
            method: 'post',
            url: adminEP,
            data: admin
        }
        const response = await axios(option);
        return response.data;

    } catch (error) {
        return error;
    }
}