import fetchRequest from "./http";

interface BackendStatus {
    active: boolean;
}

export const getBackendStatus = (): Promise<boolean> => {
    return new Promise((resolve, reject) => {
      fetchRequest({
        url: `${globalThis.remote}/callback`,
        method: 'GET',
      })
        .then((data: BackendStatus) => resolve(data.active as boolean))
        .catch((error) => reject(error.message));
    });
};
