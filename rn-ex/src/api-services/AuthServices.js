export default class AuthServices {
    constructor() {
        this.baseUrl='https://avazdg.tech:7300/api'
    }
    async login(requestBody) {
        console.log('Start Loggining')
        try {
            const response = await fetch(`${this.baseUrl}/Account/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
                // mode: 'cors',
                // cache: 'no-cache',
                // credentials: 'same-origin',

            });
            console.log('End Succesfully Loggining')

            return response;
        } catch (error) {
            console.error('Error in Login:', error);
            throw error;
        }
    }

    async register(requestBody) {
        try {
            const response = await fetch(`${this.baseUrl}/Account/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            });
            return response;
        } catch (error) {
            console.error('Error in Register:', error);
            throw error;
        }
    }
}