import { User } from "./models";

export function createBasicUser(name: string, email: string): Promise<User> {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch(`${globalThis.remote}/users`, {
                method: 'POST',
                body: JSON.stringify({ name, email }),
                headers: { 'Content-Type': 'application/json' },
            });

            if (!response.ok) {
                reject(new Error(`Failed to create user: ${response.statusText}`));
                return;
            }

            const user = await response.json();

            resolve(user);
        } catch (error) {
            reject(error);
        }
    });
}