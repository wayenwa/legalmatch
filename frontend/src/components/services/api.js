import { GetData } from '../utils/GetData';

export default {
    /**
     * Get List of Reviews
     */
    getReviews: async function () {
        try {
            const response = GetData('/wp/v2/review');
            return response;
        } catch (error) {
            throw error;
        }
    },

}