import { createSignal } from "solid-js";
import Box from "../components/Box";
import { FaSolidA, FaSolidArrowRight, FaSolidBookOpen, FaSolidCode, FaSolidEnvelope, FaSolidLock, FaSolidPencil, FaSolidTurnDown } from "solid-icons/fa";
import Navbar from "../components/Navbar";
import { Button } from '../components/button';

export default function Home() {
    const [valid, setValid] = createSignal<boolean>(false);
    const [banner, setBanner] = createSignal<boolean>(true);
    const [email, setEmail] = createSignal<string | undefined>('');

    const validateEmail = (emailTest: string) => {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (pattern.test(emailTest)) {
            setEmail(emailTest);
            setValid(true);
        }
    }

    return (
        <>
            <div class="min-h-[50vh] max-h-[90vh]">
                <div class="justify-center items-center h-[60vh] m-auto max-w-5xl grid lg:grid-cols-2 gap-4">
                    <div>
                        <h3 class="font-mono text-4xl font-semibold text-white">
                            <FaSolidCode />
                            cloud infrastructure for the <span
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
                                        <FaSolidEnvelope class="w-4 h-4" style={{ color: valid() ? 'green' : 'gray' }} />
                                    </div>
                                    <input type="text" onChange={(e) => validateEmail(e.currentTarget.value)} disabled={valid()} class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 ps-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:text-gray-400" placeholder="user@cxmpute.com" />
                                    {valid() && <div onClick={() => { setEmail(''); setValid(false) }} class="text-gray-400 absolute end-2.5 bottom-3.5 text-xs cursor-pointer hover:text-red-500 transition-colors duration-300"><FaSolidPencil /></div>}
                                </div>
                            </div>
                            <div class={`transition-all duration-300 overflow-hidden ${valid() ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
                                {valid() && (
                                    <div>
                                        <p class={'font-sans text-green-600 text-xs italic mt-1'}>Welcome, {email()}!</p>
                                        <div class={'grid grid-cols-2 gap-4 mt-3'}>
                                            <a href={'/vps'}>
                                                <Button>VPS Servers</Button>
                                            </a>
                                            <a href={'/minecraft'}>
                                                <Button>Game Servers</Button>
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </Box>
                </div>
            </div>
            <div class={'grid place-items-center max-w-7xl m-auto mb-32'}>

                <h1 class="text-5xl font-extrabold dark:text-white">Our Services<small class="ms-4 font-semibold text-gray-500 dark:text-gray-400">starting from <span class={'text-blue-500'}>$1.99/month</span> <FaSolidTurnDown class={'inline-flex'} /></small></h1>
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
                            Whether you&apos;re looking to host a small Minecraft&trade; server or host the next major e-sports tournament, we have the performance and capacity
                            to suit all needs. We have a wide catalog of games available to run, <span class={'font-bold'}>without any player or network limits.</span>
                        </p>
                        <div class={'absolute bottom-0 right-0 p-3'}>
                            <Button>View Options <FaSolidArrowRight class={'ml-2'} /></Button>
                        </div>
                    </Box>
                    <Box hero>
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
                        <div class={'absolute bottom-0 right-0 p-3'}>
                            <Button>View Options <FaSolidArrowRight class={'ml-2'} /></Button>
                        </div>
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
                        <div class={'absolute bottom-0 right-0 p-3'}>
                            <Button disabled>Launching 2025</Button>
                        </div>
                    </Box>
                </div>
            </div>
            <div class={'flex justify-center items-center m-auto bg-gray-900'}>
                <div class={'grid lg:grid-cols-3 gap-4 max-w-7xl'}>
                    <div class={'lg:col-span-2 my-auto'}>
                        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">An <mark class="px-2 text-white bg-blue-500 rounded-lg shadow-xl">All-New</mark> Experience</h1>
                        <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">CXMPUTE uses an in-house management platform, <span class={'font-bold text-gray-300'}>CTRL</span>, to process orders, manage services and more. Our latest-generation platform supports a diverse range of applications - from VPS to gameservers, everything can be controlled in one neat, approachable UI.</p>
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


            <section class="bg-white dark:bg-gray-900 mt-12">
                <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
                    <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
                        <a href="#" class="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2">
                            <FaSolidBookOpen class={'mr-1'} />
                            Article
                        </a>
                        <h1 class="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">How do we compare to competitors?</h1>
                        <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">Read our page on competitor comparison to see just how much value for money you can achieve by switching over to our services.</p>
                        <Button>Read More <FaSolidArrowRight class={'ml-2'} /></Button>
                    </div>
                    <div class="grid md:grid-cols-2 gap-8">
                        <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                            <a href="#" class="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 mb-2">
                                <FaSolidCode class={'mr-1'} />
                                Developers
                            </a>
                            <h2 class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Extensible By Design</h2>
                            <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">Find out how our entire stack - from this website to our CTRL Panel API - is fully open to tinkerers and custom integrations from you and your business.</p>
                            <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">Read more
                                <FaSolidArrowRight class={'ml-2'} />
                            </a>
                        </div>
                        <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                            <a href="#" class="bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2">
                                <FaSolidLock class={'mr-1'} />
                                Security
                            </a>
                            <h2 class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Secure to the CXRE</h2>
                            <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">Read about our CXRE framework, a physical and logical process to keeping customer and user data as secure as possible while maintaining efficiency and performance.</p>
                            <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">Read more
                                <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {banner() && (
                <div id="bottom-banner" tabindex="-1" class="fixed bottom-0 inset-x-0 z-50 flex justify-between w-full p-3 border-t border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                    <div class="flex items-center mx-auto">
                        <p class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                            <span class="inline-flex p-1 me-3 bg-gray-200 rounded-full dark:bg-gray-600 w-6 h-6 items-center justify-center">
                                <svg class="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M18.435 7.546A2.32 2.32 0 0 1 17.7 5.77a3.354 3.354 0 0 0-3.47-3.47 2.322 2.322 0 0 1-1.776-.736 3.357 3.357 0 0 0-4.907 0 2.281 2.281 0 0 1-1.776.736 3.414 3.414 0 0 0-2.489.981 3.372 3.372 0 0 0-.982 2.49 2.319 2.319 0 0 1-.736 1.775 3.36 3.36 0 0 0 0 4.908A2.317 2.317 0 0 1 2.3 14.23a3.356 3.356 0 0 0 3.47 3.47 2.318 2.318 0 0 1 1.777.737 3.36 3.36 0 0 0 4.907 0 2.36 2.36 0 0 1 1.776-.737 3.356 3.356 0 0 0 3.469-3.47 2.319 2.319 0 0 1 .736-1.775 3.359 3.359 0 0 0 0-4.908ZM8.5 5.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm3 9.063a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm2.207-6.856-6 6a1 1 0 0 1-1.414-1.414l6-6a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                            </span>
                            <span>For a limited time, get 10% off any service. Use code <code>SALE2025</code> at checkout.</span>
                        </p>
                    </div>
                    <div class="flex items-center">
                        <button onClick={() => setBanner(false)} data-dismiss-target="#bottom-banner" type="button" class="shrink-0 inline-flex justify-center w-7 h-7 items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white">
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
