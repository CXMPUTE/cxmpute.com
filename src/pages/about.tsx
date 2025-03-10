import { createEffect, Suspense } from 'solid-js';
import getBackend from '../api/init.data';

export default function About() {
  const backend = getBackend();

  createEffect(() => {
    console.log(backend());
  });

  return (
    <section class="bg-pink-100 text-gray-700 p-8">
      <h1 class="text-2xl font-bold">About</h1>

      <p class="mt-4">A page all about this website.</p>

      <p>
        <span>We love</span>
        <Suspense fallback={<span>...</span>}>
          <span>&nbsp;{backend()}</span>
        </Suspense>
      </p>
    </section>
  );
}
