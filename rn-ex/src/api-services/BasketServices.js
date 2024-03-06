export default class BasketServices {
    constructor() {
        this.baseUrl='https://avazdg.tech:7300/api'
    }

    async finishShopping(requestBody, token) {
        try {
            console.log("finish Shopping requestBody: ", JSON.stringify(requestBody));
            console.log("token: ",token);

            const response = await fetch(`${this.baseUrl}/Details/process-order`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(requestBody),
            });

            if (!response.ok) {
                const errorMessage = await response.text();
                throw new Error(`Error in finishShopping: ${response.status} - ${errorMessage}`);
            }

            console.log('Shopping finished successfully');

            return response;
        } catch (error) {
            console.error('Error in finishShopping:', error);
            throw error;
        }
    }

}