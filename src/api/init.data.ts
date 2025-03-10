import { createAsync, query } from '@solidjs/router';

function wait<T>(data: T): Promise<T> {
  return new Promise((resolve) => setTimeout(resolve, 500, data));
}

const get = query(() => wait('hello'), 'getBackend');

const getBackend = () => {
  return createAsync(() => get());
};

export default getBackend;
