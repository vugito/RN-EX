export default class AuthService {
    constructor() {
        this.baseUrl='https://217.64.21.237:7261/api'
    }



    async Login(requestBody) {
        try {
            const response = await fetch(`${this.baseUrl}/Account/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            });

            return response;
        } catch (error) {
            console.error('Error in Login:', error);
            throw error;
        }
    }


    async Register(requestBody) {
        try {
            const response = await fetch(`${this.baseUrl}/Account/register-default-account`, {
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