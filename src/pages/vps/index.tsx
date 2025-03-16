import { FaSolidArrowRight, FaSolidArrowTurnDown, FaSolidBoltLightning, FaSolidLayerGroup, FaSolidShield } from 'solid-icons/fa';
import ServerSvg from '../../assets/Server.svg';
import { Button } from '../../components/button';
import { createSignal } from 'solid-js';
import classNames from 'classnames';

export default () => {
    const [stage, setStage] = createSignal<number>(1);
    const [location, setLocation] = createSignal<string>('germany');
    const [type, setType] = createSignal<string>('standard');

    return (
        <div class={'relative'}>
            <h1 class="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-[400px] z-0 font-bold opacity-[5%] select-none">
                VPS
            </h1>
            <div class={'relative z-10'}>
                <div class={'grid lg:grid-cols-2 gap-8 max-w-screen-xl'}>
                    <section class={'text-left w-full'}>
                        <div class="py-8 px-4 mx-auto lg:py-16">
                            <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">KVM VPS Range</h1>
                            <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">View our configuration options for the range of Virtual Private Servers that we offer. Once you&apos;re happy, move onto the basket to complete your purchase.</p>
                            <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                                <Button>Find Your VPS <FaSolidArrowTurnDown class={'ml-2'} /></Button>
                                <a href="#" class="py-3 px-5 sm:ms-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                    Learn more
                                </a>
                            </div>
                        </div>
                    </section>

                    <img src={ServerSvg} class={'hidden lg:block max-w-xl max-h-xl'} />
                </div>
            </div>
            <div class={'grid lg:grid-cols-3 gap-6 mt-12 justify-center max-w-screen-xl'}>
                <div class={'bg-blue-950/50 p-6 rounded-lg shadow-xl text-gray-400'}>
                    <p class={'font-bold text-xl text-white mb-4'}>
                        <FaSolidBoltLightning class={'mr-2 inline-flex text-blue-500'} />
                        Instant Deployment
                    </p>
                    With CXMPUTE, you don&apos;t have to wait for manual approval until your server
                    is deployed to our systems. Within 30 seconds of placing your order, the service
                    is made available and added to your CTRL account for easy interaction.
                </div>
                <div class={'bg-blue-950/50 p-6 rounded-lg shadow-xl text-gray-400'}>
                    <p class={'font-bold text-xl text-white mb-4'}>
                        <FaSolidShield class={'mr-2 inline-flex text-blue-500'} />
                        Advanced DDoS Protection
                    </p>
                    We include professional-grade DDoS protection with every plan, provided via SmartMitigate&trade;,
                    in order to keep your services running smoothly even under an attack. DDoS protection can also be
                    controlled via the CTRL Dashboard.
                </div>
                <div class={'bg-blue-950/50 p-6 rounded-lg shadow-xl text-gray-400'}>
                    <p class={'font-bold text-xl text-white mb-4'}>
                        <FaSolidLayerGroup class={'mr-2 inline-flex text-blue-500'} />
                        Reliable Performance
                    </p>
                    Our base KVM VPS offers use Intel&copy; Xeon&trade;-type CPUs for general purpose, with DDR4 memory
                    and NVMe SATA SSDs by default for additional performance. All servers also come with a parallel gigabit network connection to improve latency.
                </div>
            </div>
            <div class={'mt-32'}>
                <p class={'text-5xl font-extrabold'}>VPS Configurator</p>
                <p class={'text-xl text-gray-500 mb-8 mt-1'}>Choose a suitable VPS configuration for your needs.</p>
                <ol class="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
                    <li class="flex md:w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                        <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500 cursor-pointer" onClick={() => setStage(1)}>
                            <span class="me-2">1</span>
                            Location
                        </span>
                    </li>
                    <li class="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                        <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500 cursor-pointer" onClick={() => setStage(2)}>
                            <span class="me-2">2</span>
                            Tier
                        </span>
                    </li>
                    <li class="flex items-center">
                        <span class="me-2">3</span>
                        Confirmation
                    </li>
                </ol>
                <div class={'bg-black/50 p-6 rounded-lg shadow-xl mt-8'}>
                    {stage() === 1 && (
                        <>
                            <div class={'grid grid-cols-4 gap-8'}>
                                <div class={classNames(location() === 'uk' && 'border-2 border-blue-200', 'p-4 bg-gray-800 rounded-lg shadow-xl opacity-50')}>
                                    <div class={'grid grid-cols-3 gap-4'}>
                                        <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/255px-Flag_of_the_United_Kingdom_%281-2%29.svg.png'} width={64} class={'rounded my-auto'} />
                                        <div class={'col-span-2'}>
                                            <p class={'font-bold'}>United Kingdom <span class={'font-normal text-gray-400 italic'}>EU</span></p>
                                            <p class={'text-yellow-200'}>Out of Stock</p>
                                        </div>
                                    </div>
                                </div>
                                <div class={classNames(location() === 'germany' && 'border-2 border-blue-200', 'p-4 bg-gray-800 rounded-lg shadow-xl')}>
                                    <div class={'grid grid-cols-3 gap-4'}>
                                        <img src={'https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/255px-Flag_of_Germany.svg.png'} width={64} class={'rounded my-auto'} />
                                        <div class={'col-span-2'}>
                                            <p class={'font-bold'}>Germany <span class={'font-normal text-gray-400 italic'}>EU</span></p>
                                            <p class={'text-green-200'}>Available Now</p>
                                        </div>
                                    </div>
                                </div>
                                <div class={classNames(location() === 'usa' && 'border-2 border-blue-200', 'p-4 bg-gray-800 rounded-lg shadow-xl opacity-50')}>
                                    <div class={'grid grid-cols-3 gap-4'}>
                                        <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Flag_of_the_United_States_%28Pantone%29.svg/255px-Flag_of_the_United_States_%28Pantone%29.svg.png'} width={64} class={'rounded my-auto'} />
                                        <div class={'col-span-2'}>
                                            <p class={'font-bold'}>Texas <span class={'font-normal text-gray-400 italic'}>NA</span></p>
                                            <p class={'text-yellow-200'}>Out of Stock</p>
                                        </div>
                                    </div>
                                </div>
                                <div class={classNames(location() === 'usa' && 'border-2 border-blue-200', 'p-4 bg-gray-800 rounded-lg shadow-xl opacity-50')}>
                                    <div class={'grid grid-cols-3 gap-4'}>
                                        <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Flag_of_the_United_States_%28Pantone%29.svg/255px-Flag_of_the_United_States_%28Pantone%29.svg.png'} width={64} class={'rounded my-auto'} />
                                        <div class={'col-span-2'}>
                                            <p class={'font-bold'}>New York <span class={'font-normal text-gray-400 italic'}>NA</span></p>
                                            <p class={'text-yellow-200'}>Unavailable</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class={'mt-4 text-right'} onClick={() => setStage((stage) => stage + 1)}>
                                <Button>Next Step <FaSolidArrowRight class={'ml-2'} /></Button>
                            </div>
                        </>
                    )}
                    {stage() == 2 && (
                        <>
                            <div class={'grid grid-cols-2 gap-8'}>
                                <div class={classNames(type() === 'standard' && 'border-2 border-blue-200', 'p-4 bg-gray-800 rounded-lg shadow-xl')} onClick={() => setType('standard')}>
                                    <div class={'grid grid-cols-3 gap-4'}>
                                        <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Intel_Xeon_2020_logo.svg/1200px-Intel_Xeon_2020_logo.svg.png'} width={64} class={'rounded m-auto'} />
                                        <div class={'col-span-2'}>
                                            <p class={'font-bold'}>Standard Performance</p>
                                            <p class={'text-blue-200'}>Starting from $5/mo</p>
                                            <p class={'text-gray-400 text-sm'}>Suitable for typical workloads.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class={classNames(type() === 'performance' && 'border-2 border-blue-200', 'p-4 bg-gray-800 rounded-lg shadow-xl')} onClick={() => setType('performance')}>
                                    <div class={'grid grid-cols-3 gap-4'}>
                                        <img src={'https://neoxcomputers.co.uk/cdn/shop/files/ryzen-5-box.webp?v=1731243790&width=400'} width={64} class={'rounded m-auto'} />
                                        <div class={'col-span-2'}>
                                            <p class={'font-bold'}>High Performance <FaSolidBoltLightning class={'text-yellow-500 inline-flex'} /></p>
                                            <p class={'text-blue-200'}>Starting from $10/mo</p>
                                            <p class={'text-gray-400 text-sm'}>Ideal for more demanding workloads.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class={'mt-4 text-right'} onClick={() => setStage((stage) => stage + 1)}>
                                <Button>Next Step <FaSolidArrowRight class={'ml-2'} /></Button>
                            </div>
                        </>
                    )}
                    {stage() === 3 && (
                        <>
                            <div class="relative mb-6">
                                <input id="medium-range" type="range" value="0" class="w-full h-2 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
                                <span class="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">6GB RAM (Min)</span>
                                <span class="text-sm text-gray-500 dark:text-gray-400 absolute start-1/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">16GB RAM</span>
                                <span class="text-sm text-gray-500 dark:text-gray-400 absolute start-2/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">32GB RAM</span>
                                <span class="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">64GB RAM (Max)</span>
                            </div>


                        </>
                    )}
                </div>
            </div>
        </div>
    );
};
