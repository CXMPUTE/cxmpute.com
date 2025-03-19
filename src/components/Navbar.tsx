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
                            <A href={'https://ctrl.cxmpute.com'} class="block py-2 px-3 text-gray-400 rounded-sm md:bg-transparent md:p-0" aria-current="page">Sign In</A>
                        </li>
                        <li>
                            <a href={'https://ctrl.cxmpute.com/register'} class="block py-2 px-3 text-gray-400 rounded-sm md:bg-transparent md:p-0" aria-current="page">Register</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <nav class="w-full bg-gray-800 bg-opacity-50 z-50">
            <div class="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto py-5 px-3">
                <div class="w-full flex justify-between font-medium">
                    <ul class={'flex flex-col p-4 md:p-0 mt-4 md:space-x-12 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 font-semibold'}>
                        <li>
                            <A href={'/vps'} class="block py-2 px-3 text-white rounded-sm md:bg-transparent md:p-0" aria-current="page">VPS Hosting</A>
                        </li>
                        <li>
                            <A href={'/minecraft'} class="block py-2 px-3 text-white rounded-sm md:bg-transparent md:p-0" aria-current="page">Minecraft&trade; Servers</A>
                        </li>
                        <li>
                            <A href={'/features'} class="block py-2 px-3 text-white rounded-sm md:bg-transparent md:p-0" aria-current="page">Features</A>
                        </li>
                        <li>
                            <A href={'/comparison'} class="block py-2 px-3 text-white rounded-sm md:bg-transparent md:p-0" aria-current="page">Compare Us</A>
                        </li>
                    </ul>
                    <iframe src="https://status.cxmpute.com/badge?theme=dark" width="250" height="30" class={'opacity-50'}></iframe>
                </div>
            </div>
        </nav>
    </>
);
