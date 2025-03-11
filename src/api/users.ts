import { User } from "./models";
import fetchRequest from "./http";

export const createBasicUser = (name: string, email: string): Promise<User> => {
    return new Promise((resolve, reject) => {
      fetchRequest({
        url: `${globalThis.remote}/users/basic`,
        method: 'POST',
        body: { name, email },
      })
        .then((user: User) => resolve(user))
        .catch((error) => reject(error.message));
    });
};
