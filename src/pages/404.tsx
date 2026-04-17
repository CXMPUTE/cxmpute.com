export default function NotFound() {
  return (
    <section class="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div class="glass-panel max-w-3xl rounded-[2rem] px-8 py-16 text-center">
        <p class="text-sm uppercase tracking-[0.35em] text-cyan-300">404 • Page not found</p>
        <h1 class="mt-6 text-6xl font-extrabold tracking-tight text-white">We couldn't find that page.</h1>
        <p class="mt-4 text-slate-300 text-lg leading-8">The link may be broken or the page has moved. Return home or explore our hosting plans to continue.</p>
        <a href="/" class="button-frost mt-8 inline-flex items-center justify-center px-6 py-3">Return Home</a>
      </div>
    </section>
  );
}
