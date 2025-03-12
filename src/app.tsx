import { Suspense, type Component } from 'solid-js';
import { A, useLocation } from '@solidjs/router';
import Footer from './components/Footer';

const App: Component = (props: { children: Element }) => {
    const location = useLocation();

    return (
        <div class={'text-gray-200 font-sans'}>
            <nav class="bg-gray-200 text-gray-900 px-4" hidden={location.pathname.startsWith('/store') ? false : 'hidden'}>
                <ul class="flex items-center">
                    <li class="py-2 px-4">
                        <A href="/" class="no-underline hover:underline">
                            Home
                        </A>
                    </li>
                    <li class="py-2 px-4">
                        <A href="/about" class="no-underline hover:underline">
                            About
                        </A>
                    </li>
                    <li class="py-2 px-4">
                        <A href="/error" class="no-underline hover:underline">
                            Error
                        </A>
                    </li>

                    <li class="text-sm flex items-center space-x-1 ml-auto">
                        <span>URL:</span>
                        <input
                            class="w-75px p-1 bg-white text-sm rounded-lg"
                            type="text"
                            readOnly
                            value={location.pathname}
                        />
                    </li>
                </ul>
            </nav>
            <div class="absolute top-0 z-10 w-full"><div class="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[#3b82f6] opacity-50 blur-[80px]"></div></div>
            <main class={'bg-zinc-900 pb-16 min-h-[80vh]'}>
                <Suspense>{props.children}</Suspense>
                </main>
                <Footer />
        </div>
    );
};

export default App;
