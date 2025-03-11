
export interface RequestOptions {
    url: string;
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    body?: Record<string, any>;
}

const DEFAULT_HEADERS = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${import.meta.env.VITE_API_KEY}`,
};

const fetchRequest = async <T>({ url, method = 'GET', body }: RequestOptions): Promise<T> => {
    try {
        const response = await fetch(url, {
            method,
            headers: DEFAULT_HEADERS,
            body: body ? JSON.stringify(body) : undefined,
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return response.json();
    } catch (error) {
        console.error('API call failed:', error);
        throw error;
    }
};

export default fetchRequest;
