import { createSignal } from 'solid-js';
import getVPSData, { VPSOptions, VPSTier } from '../../../data/vps.data';
import classNames from 'classnames';
import { Button } from '../../components/button';
import { FaSolidArrowRight, FaSolidBoltLightning, FaSolidCheck, FaSolidEthernet, FaSolidHardDrive, FaSolidMemory, FaSolidMicrochip } from 'solid-icons/fa';
import YourServerSvg from '../../assets/YourServer.svg';

interface ConfiguratorOptions {
    stage?: number;
    location?: string;
    tier?: VPSTier;
    vps?: VPSOptions;
}

export default () => {
    let plans: VPSOptions[] = [];
    const data = getVPSData;

    const [selected, setSelected] = createSignal<VPSOptions | undefined>();
    const [options, setOptions] = createSignal<ConfiguratorOptions>({ stage: 1, location: 'germany', tier: 'standard' });

    const refreshVPSOptions = () => {
        plans = [];

        data.forEach((vps) => {
            if (vps.type === options().tier) {
                plans.push(vps);
            }
        });
    };

    const redirect = () => {
        // @ts-expect-error everything is fine.
        window.location = selected().link;
    }

    return (
        <div class={'mt-32'} id={'configure_vps'}>
            <p class={'text-5xl font-extrabold'}>VPS Configurator</p>
            <p class={'text-xl text-gray-500 mb-8 mt-1'}>Choose a suitable VPS configuration for your needs.</p>
            <ol class="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
                <li class="flex md:w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                    <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500 cursor-pointer" onClick={() => setOptions((current) => ({ ...current, stage: 1 }))}>
                        <span class="me-2">1</span>
                        Location
                    </span>
                </li>
                <li class="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                    <span class={classNames(options().stage >= 2 && 'text-blue-500', "flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500 cursor-pointer")} onClick={() => setOptions((current) => ({ ...current, stage: 2 }))}>
                        <span class="me-2">2</span>
                        Tier
                    </span>
                </li>
                <li class={classNames(options().stage >= 3 && 'text-blue-500', "flex items-center")}>
                    <span class="me-2">3</span>
                    Options
                </li>
            </ol>
            <div class={'bg-black/50 p-6 rounded-lg shadow-xl mt-8'}>
                {options().stage === 1 && (
                    <>
                        <div class={'grid grid-cols-4 gap-8'}>
                            <div class={classNames(options().location === 'uk' && 'border-2 border-blue-200', 'p-4 bg-gray-800 rounded-lg shadow-xl opacity-50')}>
                                <div class={'grid grid-cols-3 gap-4'}>
                                    <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/255px-Flag_of_the_United_Kingdom_%281-2%29.svg.png'} width={64} class={'rounded my-auto'} />
                                    <div class={'col-span-2'}>
                                        <p class={'font-bold'}>United Kingdom <span class={'font-normal text-gray-400 italic'}>EU</span></p>
                                        <p class={'text-yellow-200'}>Out of Stock</p>
                                    </div>
                                </div>
                            </div>
                            <div class={classNames(options().location === 'germany' && 'border-2 border-blue-200', 'p-4 bg-gray-800 rounded-lg shadow-xl')}>
                                <div class={'grid grid-cols-3 gap-4'}>
                                    <img src={'https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/255px-Flag_of_Germany.svg.png'} width={64} class={'rounded my-auto'} />
                                    <div class={'col-span-2'}>
                                        <p class={'font-bold'}>Germany <span class={'font-normal text-gray-400 italic'}>EU</span></p>
                                        <p class={'text-green-200'}>Available Now</p>
                                    </div>
                                </div>
                            </div>
                            <div class={classNames(options().location === 'usa' && 'border-2 border-blue-200', 'p-4 bg-gray-800 rounded-lg shadow-xl opacity-50')}>
                                <div class={'grid grid-cols-3 gap-4'}>
                                    <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Flag_of_the_United_States_%28Pantone%29.svg/255px-Flag_of_the_United_States_%28Pantone%29.svg.png'} width={64} class={'rounded my-auto'} />
                                    <div class={'col-span-2'}>
                                        <p class={'font-bold'}>Texas <span class={'font-normal text-gray-400 italic'}>NA</span></p>
                                        <p class={'text-yellow-200'}>Out of Stock</p>
                                    </div>
                                </div>
                            </div>
                            <div class={classNames(options().location === 'usa' && 'border-2 border-blue-200', 'p-4 bg-gray-800 rounded-lg shadow-xl opacity-50')}>
                                <div class={'grid grid-cols-3 gap-4'}>
                                    <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Flag_of_the_United_States_%28Pantone%29.svg/255px-Flag_of_the_United_States_%28Pantone%29.svg.png'} width={64} class={'rounded my-auto'} />
                                    <div class={'col-span-2'}>
                                        <p class={'font-bold'}>New York <span class={'font-normal text-gray-400 italic'}>NA</span></p>
                                        <p class={'text-yellow-200'}>Unavailable</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class={'mt-4 text-right'} onClick={() => setOptions((current) => ({ ...current, stage: 2 }))}>
                            <Button>Next Step <FaSolidArrowRight class={'ml-2'} /></Button>
                        </div>
                    </>
                )}
                {options().stage == 2 && (
                    <>
                        <div class={'grid grid-cols-2 gap-8'}>
                            <div class={classNames(options().tier === 'standard' && 'border-2 border-blue-200', 'relative p-4 bg-gray-800 rounded-lg shadow-xl')} onClick={() => setOptions((current) => ({ ...current, tier: 'standard' }))}>
                                <span class="bg-green-200 text-sm font-medium text-center p-1 leading-none rounded-full px-2 dark:bg-green-900 dark:text-green-200 absolute -translate-y-1/2 translate-x-1/3 left-auto top-0 right-0">Best Value</span>
                                <div class={'grid grid-cols-3 gap-4'}>
                                    <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Intel_Xeon_2020_logo.svg/1200px-Intel_Xeon_2020_logo.svg.png'} width={64} class={'rounded m-auto'} />
                                    <div class={'col-span-2'}>
                                        <p class={'font-bold'}>Standard Performance</p>
                                        <p class={'text-blue-200'}>Starting from €4.99/mo</p>
                                        <p class={'text-gray-400 text-sm'}>Suitable for typical workloads.</p>
                                    </div>
                                </div>
                            </div>
                            <div class={classNames(options().tier === 'performance' && 'border-2 border-blue-200', 'relative p-4 bg-gray-800 rounded-lg shadow-xl')} onClick={() => setOptions((current) => ({ ...current, tier: 'performance' }))}>
                                <span class="bg-yellow-200 text-sm font-medium text-center p-1 leading-none rounded-full px-2 dark:bg-yellow-900 dark:text-yellow-200 absolute -translate-y-1/2 translate-x-1/3 left-auto top-0 right-0">Best Power</span>
                                <div class={'grid grid-cols-3 gap-4'}>
                                    <img src={'https://neoxcomputers.co.uk/cdn/shop/files/ryzen-5-box.webp?v=1731243790&width=400'} width={64} class={'rounded m-auto'} />
                                    <div class={'col-span-2'}>
                                        <p class={'font-bold'}>High Performance <FaSolidBoltLightning class={'text-yellow-500 inline-flex'} /></p>
                                        <p class={'text-blue-200'}>Starting from €4.99/mo</p>
                                        <p class={'text-gray-400 text-sm'}>Ideal for more demanding workloads.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class={'mt-4 text-right'} onClick={() => setOptions((current) => ({ ...current, stage: 3 }))}>
                            <Button>Next Step <FaSolidArrowRight class={'ml-2'} /></Button>
                        </div>
                    </>
                )}
                {options().stage === 3 && (
                    <>
                        {refreshVPSOptions()}
                        {plans.length < 1 ? <>No configurations can be found for the selected options.</> : (
                            <>
                                <span class={'hidden'}>{setSelected(plans[0]) as unknown as Element}</span>
                                <div class="relative mb-6">
                                    <input id="medium-range" min="0" max={plans.length - 1} onInput={(e) => { setSelected(plans[Number(e.currentTarget.value)]) }} type="range" value={0} class="w-full h-2 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
                                    <span class="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">{plans[0].memory}GB RAM</span>
                                    <span class="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">{plans[plans.length - 1].memory}GB RAM</span>
                                </div>
                                <div class={'grid lg:grid-cols-2 gap-12 place-items-center'}>
                                    <img src={YourServerSvg} class={'hidden md:block p-12'} width={512} height={512} />
                                    <div class={'text-white font-semibold text-lg bg-black/25 p-4 lg:p-12 rounded-lg shadow-xl'}>
                                        <h1 class={'text-xl lg:text-4xl font-bold'}>Your Server ({selected()?.name ?? 'unknown'})</h1>
                                        <div class={'text-gray-400 mt-4'}>
                                            <p class={'mb-1'}>
                                                <FaSolidMicrochip class={'mb-1 mr-2 inline-flex'} /><span class={'text-blue-500'}>{selected().vcpus} vCores</span> on {selected().type === 'standard' ? 'Intel Xeon Standard CPU' : 'AMD Ryzen Performance CPU'}
                                            </p>
                                            <p class={'my-1'}>
                                                <FaSolidMemory class={'mb-1 mr-2 inline-flex'} /><span class={'text-blue-500'}>{selected().memory}GB</span> DDR4 ECC dedicated memory
                                            </p>
                                            <p class={'my-1'}>
                                                <FaSolidHardDrive class={'mb-1 mr-2 inline-flex'} /><span class={'text-blue-500'}>{selected().disk}GB</span> {selected().type === 'standard' ? 'SATA' : 'NVMe'} SSD Storage
                                            </p>
                                            <p>
                                                <FaSolidEthernet class={'mb-1 mr-2 inline-flex'} /><span class={'text-blue-500'}>{selected().traffic}TB</span> DDoS-protected Traffic
                                            </p>
                                            <hr class={'my-6'} />
                                            <p>
                                                <FaSolidCheck class={'mb-1 mr-2 inline-flex text-blue-500'} /> 99.5% SLA Uptime
                                            </p>
                                            <p class={'my-1'}>
                                                <FaSolidCheck class={'mb-1 mr-2 inline-flex text-blue-500'} /> DDoS Protection from SmartMitigate&trade;
                                            </p>
                                            <p class={'my-1'}>
                                                <FaSolidCheck class={'mb-1 mr-2 inline-flex text-blue-500'} /> Custom Control Panel
                                            </p>
                                            <p class={'my-1'}>
                                                <FaSolidCheck class={'mb-1 mr-2 inline-flex text-blue-500'} /> 1000mbps Parallel Network
                                            </p>
                                            <p>
                                                <FaSolidCheck class={'mb-1 mr-2 inline-flex text-blue-500'} /> Automated System Backups
                                            </p>
                                        </div>
                                        <h1 class={'text-xl lg:text-3xl font-bold mt-4 lg:mt-8'}>€{selected().price}/month</h1>
                                        <p class={'italic text-gray-400 text-sm font-normal'}>30-day payment. Cancel anytime, no fees, no contract.</p>
                                        <div class={'text-right mt-4'}>
                                            <Button onClick={redirect}>Order Now</Button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </>
                )}
            </div>
        </div>
    )
}