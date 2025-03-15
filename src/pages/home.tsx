import { createEffect, createSignal } from "solid-js";
import Box from "../components/Box";
import { FaSolidEnvelope, FaSolidPencil, FaSolidTurnDown } from "solid-icons/fa";
import Disconnected from "../errors/disconnected";
import { createBasicUser } from "../api/users";
import Navbar from "../components/Navbar";

function validateEmail(email: string): boolean {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return pattern.test(email);
}

export default function Home() {
    const [show, setShow] = createSignal<'none' | 'success' | 'error'>('none');
    const [email, setEmail] = createSignal<string | undefined>('');

    createEffect(() => {
        const valid = validateEmail(email());

        if (!valid) {
            setShow('none');
        } else {
            createBasicUser('Unknown User', email())
                .then(() => setShow('success'))
                .catch(() => setShow('error'))
        }
    }, [email]);

    return (
        <>
            <Disconnected />
            <Navbar />
            <div class="block min-h-[50vh] max-h-[90vh]">
                <div class="justify-center items-center h-screen m-auto max-w-5xl grid lg:grid-cols-2 gap-4">
                    <div>
                        <h3 class="font-mono text-4xl font-semibold text-white">cloud infrastructure for the <span
                            class="text-blue-500">modern world</span></h3>
                        <p class="text-gray-400 font-sans mt-1">CXMPUTE is an organisation which specialises in providing low-cost
                            solutions for hosting web applications with a global presence.</p>
                    </div>
                    <Box>
                        <div class={'text-center my-8 transition-all duration-300'}>
                            <p class={'text-2xl font-semibold font-sans'}>
                                Get started with <span class={'text-blue-400'}>CXMPUTE</span>
                            </p>
                            <div class="flex justify-center mt-6">
                                <div class={'relative w-2/3'}>
                                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                        <FaSolidEnvelope class="w-4 h-4" style={{ color: show() === 'success' ? 'green' : show() === 'error' ? 'red' : 'gray' }} />
                                    </div>
                                    <input type="text" onChange={(e) => setEmail(e.currentTarget.value)} disabled={show() !== 'none'} class="w-full bg-zinc-50 border border-zinc-300 text-zinc-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 ps-10 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:text-zinc-400" placeholder="user@cxmpute.com" />
                                    {show() && <div onClick={() => { setEmail(''); setShow('none') }} class="text-gray-400 absolute end-2.5 bottom-3.5 text-xs cursor-pointer hover:text-red-500 transition-colors duration-300"><FaSolidPencil /></div>}
                                </div>
                            </div>
                            <div class={`transition-all duration-300 overflow-hidden ${show() !== 'none' ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
                                {show() === 'success' && <p class={'font-sans text-green-600 text-xs italic mt-1'}>Account created successfully.</p>}
                                {show() === 'error' && <p class={'font-sans text-red-600 text-xs italic mt-1'}>Unable to create account. Are you trying to sign in?</p>}
                            </div>
                        </div>
                    </Box>
                </div>
            </div>
            <div class={'grid place-items-center max-w-7xl m-auto mb-32'}>

                <h1 class="text-5xl font-extrabold dark:text-white">Our Services<small class="ms-4 font-semibold text-gray-500 dark:text-gray-400">starting from $5/mo <FaSolidTurnDown class={'inline-flex'} /></small></h1>
                <div class={'grid lg:grid-cols-3 gap-8 mt-12 w-full'}>
                    <Box>
                        <span class="bg-green-200 text-sm font-medium text-center p-1 leading-none rounded-full px-2 dark:bg-green-900 dark:text-green-200 absolute -translate-y-1/2 translate-x-1/3 left-auto top-0 right-0">2025 sale</span>
                        <div class={'w-full flex justify-center my-8'}>
                            <img width="64" height="32" src="https://img.icons8.com/fluency/96/ps-controller.png" alt="ps-controller" />
                            <p class={'my-auto ml-4 text-center text-4xl font-semibold font-sans'}>
                                Gameservers
                            </p>
                        </div>
                        <p class={'px-8 mb-8'}>
                            Whether you&apos;re looking to host a small Minecraft&trade; server or host the next major e-sports tournament, CXMPUTE has the performance and capacity
                            to suit all needs regarding gameservers. We have a wide catalog of games available to run, <span class={'font-bold'}>without any player or network limits.</span>
                        </p>
                    </Box>
                    <Box>
                        <span class="bg-green-200 text-sm font-medium text-center p-1 leading-none rounded-full px-2 dark:bg-green-900 dark:text-green-200 absolute -translate-y-1/2 translate-x-1/3 left-auto top-0 right-0">2025 sale</span>
                        <div class={'w-full flex justify-center my-8'}>
                            <img width="64" height="64" src="https://img.icons8.com/fluency/96/database--v1.png" alt="database--v1" />
                            <p class={'my-auto ml-4 text-center text-4xl font-semibold font-sans'}>
                                VPS/Dedicated
                            </p>
                        </div>
                        <p class={'px-8 mb-8'}>
                            CXMPUTE also offers Virtual Private Server (VPS) or Dedicated Server options for users who need more horsepower and configurability. Starting from $5/monthly,
                            our VPS lines run on specialised Ryzen&trade; hardware for peak performance.
                        </p>
                    </Box>
                    <Box>
                        <span class="bg-blue-200 text-sm font-medium text-blue-800 text-center p-1 leading-none rounded-full px-2 dark:bg-blue-900 dark:text-blue-200 absolute -translate-y-1/2 translate-x-1/3 left-auto top-0 right-0">Coming Soon</span>
                        <div class={'w-full flex justify-center my-8'}>
                            <img width="64" height="64" src="https://img.icons8.com/fluency/96/internet.png" alt="internet" />
                            <p class={'my-auto ml-4 text-center text-4xl font-semibold font-sans'}>
                                Web Hosting
                            </p>
                        </div>
                        <p class={'px-8 mb-8'}>
                            Use our custom web hosting dashboard to configure domains, deploy sites and manage your files in one easy-to-use UI, custom-built for our services. Migrate your files over from your old provider with ease, and get set up from $2/month on our Value plans.
                        </p>
                    </Box>
                </div>
            </div>
            <div class={'flex justify-center items-center m-auto bg-zinc-900'}>
                <div class={'grid lg:grid-cols-3 gap-4 max-w-7xl'}>
                    <div class={'lg:col-span-2 my-auto'}>
                        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">An <mark class="px-2 text-white bg-blue-600 rounded-lg">All-New</mark> Experience</h1>
                        <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">CXMPUTE uses an in-house management platform, <span class={'font-bold text-gray-300'}>CTRL</span>, to process orders, manage services and more. Our latest-generation platform supports a diverse range of applications - from VPS to gameservers, everything can be controlled in one neat, approachable UI. Powered by SolidJS.</p>
                    </div>
                    <img src={'https://cdn.pterodactyl.io/site-assets/mockup-macbook-grey-1.0.png'} />
                    <hr class={'lg:col-span-3 my-16'} />
                    <img src={'https://cdn.pterodactyl.io/site-assets/mockup-macbook-grey-1.0.png'} />
                    <div class={'lg:col-span-2 my-auto'}>
                        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Stellar Performance</h1>
                        <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Our cloud stack uses latest-generation chips from Intel&trade; and Ryzen&trade; along with NVMe SSD storage, Combahton DDoS Protection, 1gbps parallel networking and much more. Our Distributed Cloud Engine watches server performance in realtime and, if needed, can deploy extra "boost" cores and RAM to your servers in case of a spike in traffic. All free of charge, included in every plan.</p>
                    </div>
                </div>
            </div>
        </>
    );
}
