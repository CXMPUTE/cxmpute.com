export async function getBackendStatus(): Promise<boolean> {
    try {
        const response = await fetch(`${globalThis.remote}/callback`);
        const data = await response.json();

        return data.active;
    } catch (error) {
        throw error;
    }
};
