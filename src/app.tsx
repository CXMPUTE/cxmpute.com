import { Suspense, type Component } from 'solid-js';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const App: Component = (props: { children: Element }) => {
    return (
        <div class={'text-gray-200 font-sans'}>
            <div class="hidden lg:block absolute top-0 z-10 w-full"><div class="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[#3b82f6] opacity-50 blur-[80px]"></div></div>
            <main class={'bg-gray-900 pb-16 min-h-[80vh]'}>
                <Navbar />
                <Suspense>
                    <div class={'grid justify-center items-center mt-16 mx-4 lg:mx-0'}>{props.children}
                    </div></Suspense>
            </main>
            <Footer />
        </div>
    );
};

export default App;
