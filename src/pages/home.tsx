import { createEffect, createSignal } from "solid-js";
import Box from "../components/Box";
import { FaSolidArrowDown, FaSolidEnvelope, FaSolidPencil } from "solid-icons/fa";
import Disconnected from "../errors/disconnected";
import { createBasicUser } from "../api/users";

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
            <div class="block min-h-[50vh] max-h-[90vh]">
                <div class="justify-center items-center h-screen m-auto max-w-5xl grid lg:grid-cols-2 gap-4">
                    <div>
                        <h3 class="font-mono text-4xl font-semibold text-white">cloud infrastructure for the <span
                            class="text-purple-500">modern world</span></h3>
                        <p class="text-gray-400 font-sans mt-1">CXMPUTE is an organisation which specialises in providing low-cost
                            solutions for hosting web applications with a global presence.</p>
                    </div>
                    <Box>
                        <div class={'text-center my-8 transition-all duration-300'}>
                            <p class={'text-2xl font-semibold font-sans'}>
                                Get started with <span class={'text-purple-400'}>CXMPUTE</span>
                            </p>
                            <div class="flex justify-center mt-6">
                                <div class={'relative w-2/3'}>
                                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                        <FaSolidEnvelope class="w-4 h-4" style={{ color: show() === 'success' ? 'green' : show() === 'error' ? 'red' : 'gray' }} />
                                    </div>
                                    <input type="text" onChange={(e) => setEmail(e.currentTarget.value)} disabled={show() !== 'none'} class="w-full bg-zinc-50 border border-zinc-300 text-zinc-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block p-2.5 ps-10 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500 disabled:text-zinc-400" placeholder="user@cxmpute.com" />
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
            <div class={'flex justify-center items-center m-auto mb-32'}>

                <h1 class="text-5xl font-extrabold dark:text-white">Services<small class="ms-4 font-semibold text-gray-500 dark:text-gray-400">starting from $5/mo <FaSolidArrowDown class={'inline-flex'} /></small></h1>
            </div>
            <div class={'flex justify-center items-center m-auto bg-zinc-900'}>
                <div class={'grid lg:grid-cols-3 gap-4 max-w-7xl'}>
                    <div class={'lg:col-span-2'}>
                        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">An <mark class="px-2 text-white bg-purple-600 rounded-lg">all-new</mark> experience</h1>
                        <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">CXMPUTE uses an in-house management platform, <span class={'font-bold text-gray-300'}>CTRL</span>, to process orders, manage services and more. Our latest-generation platform supports a diverse range of applications - from VPS to gameservers, everything can be controlled in one neat, approachable UI. Powered by SolidJS.</p>
                    </div>
                </div>
            </div>
        </>
    );
}
