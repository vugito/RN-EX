export default class BasketServices {
    constructor() {
        this.baseUrl='https://avazdg.tech:7300/api'
    }
    async FinishShopping(requestBody,token) {
        try {
            console.log("requestBody: ",requestBody);
            console.log("token: ",token);
            const response = await fetch(`${this.baseUrl}/Details/process-order`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorize':`Bearer ${token}`
                },
                body: JSON.stringify(requestBody),
            });
            console.log('End Succesfully Shopping')

            return response;
        } catch (error) {
            console.error('Error in Login:', error);
            throw error;
        }
    }
}