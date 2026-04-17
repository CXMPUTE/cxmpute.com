import { Suspense, type Component } from 'solid-js';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const App: Component = (props: { children: Element }) => (
    <div class="min-h-screen bg-slate-950 text-slate-100 font-mono antialiased">
        <div class="pointer-events-none absolute inset-x-0 top-0 -z-10 overflow-hidden">
            <div class="absolute left-1/2 top-0 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl" />
            <div class="absolute right-0 top-24 h-[24rem] w-[24rem] rounded-full bg-violet-500/10 blur-3xl" />
            <div class="absolute left-10 top-80 h-[18rem] w-[18rem] rounded-full bg-cyan-400/10 blur-3xl" />
        </div>
        <main class="relative overflow-hidden pb-16">
            <Navbar />
            <Suspense>
                <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {props.children}
                </div>
            </Suspense>
        </main>
        <Footer />
    </div>
);

export default App;
