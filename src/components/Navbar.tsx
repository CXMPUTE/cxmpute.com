import { A } from "@solidjs/router";

export default () => (
    <>
        <nav class="w-full bg-blue-900 bg-opacity-50 z-50">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
                <a href={'/'} class="flex items-center space-x-2 rtl:space-x-reverse">
                    <img src="https://i.postimg.cc/zX0BVThh/Untitled-design-2.png" class="h-6 my-auto" alt="Flowbite Logo" />
                    <span class="self-center text-xl whitespace-nowrap dark:text-white font-extrabold mb-0.5">CXMPUTE</span>
                </a>
                <div class="hidden w-full md:block md:w-auto">
                    <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                        <li>
                            <a href={'https://discord.gg/FBGHC7hWPy'} class="block py-2 px-3 text-gray-400 rounded-sm md:bg-transparent md:p-0" aria-current="page">Discord</a>
                        </li>
                        <li>
                            <span class={'text-gray-400'}>&bull;</span>
                        </li>
                        <li>
                            <a href={'https://ctrl.cxmpute.com'} class="block py-2 px-3 text-gray-400 rounded-sm md:bg-transparent md:p-0" aria-current="page">Sign In</a>
                        </li>
                        <li>
                            <a href={'https://ctrl.cxmpute.com/register'} class="block py-2 px-3 text-gray-400 rounded-sm md:bg-transparent md:p-0" aria-current="page">Register</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <nav class="w-full bg-gray-800 bg-opacity-50 z-50">
            <div class="max-w-screen-lg flex items-center justify-between mx-auto py-5 px-3">
                <div class="w-full font-medium">
                    <ul class="w-full flex mt-4 flex-row md:mt-0 font-semibold overflow-x-auto">
                        <li class={'mr-12'}>
                            <A href="/vps">VPS <span class={'hidden lg:inline-flex'}>Hosting</span></A>
                        </li>
                        <li class={'mr-12'}>
                            <A href="/minecraft">Minecraft™ <span class={'hidden lg:inline-flex'}>Servers</span></A>
                        </li>
                        <li class={'mr-12'}>
                            <A href="/dedicated">Dedicated <span class={'hidden lg:inline-flex'}>Servers</span></A>
                        </li>
                        <li>
                            <A href="/compare">Compare <span class={'hidden lg:inline-flex'}>Us</span></A>
                        </li>
                        <li class={'ml-auto'}>
                            <iframe src="https://status.cxmpute.com/badge?theme=dark" width="250" height="30" class="opacity-50 hidden md:block"></iframe>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
);
