import { FaSolidArrowTurnDown, FaSolidBoltLightning, FaSolidCheck, FaSolidEthernet, FaSolidHardDrive, FaSolidLayerGroup, FaSolidMemory, FaSolidMicrochip, FaSolidShield } from 'solid-icons/fa';
import ServerSvg from '../../assets/Server.svg';
import { Button } from '../../components/button';
import Configure from './configure';

export default () => {
    let target;

    const scrollToDiv = () => {
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    };

    const redirect = (url: string) => {
        // @ts-expect-error this is fine
        window.location = url;
    }

    return (
        <div class={'max-w-7xl relative'}>
            <h1 class="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-[400px] z-0 font-bold opacity-[5%] select-none">
                VPS
            </h1>
            <div class={'z-10'}>
                <div class={'grid lg:grid-cols-2 gap-8 w-full place-items-center'}>
                    <div class={'text-left w-full'}>
                        <div class="py-8 px-4 mx-auto lg:py-16">
                            <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">KVM VPS Range</h1>
                            <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">View our configuration options for the range of Virtual Private Servers that we offer. Once you&apos;re happy, move onto the basket to complete your purchase.</p>
                            <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                                <Button onClick={scrollToDiv}>Find Your VPS <FaSolidArrowTurnDown class={'ml-2'} /></Button>
                                <a href="#" class="py-3 px-5 sm:ms-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                    Learn more
                                </a>
                            </div>
                        </div>
                    </div>

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
                <p class={'text-5xl font-extrabold'}>Our Best Offers</p>
                <p class={'text-xl text-gray-500 mb-8 mt-1'}>Choose between our best value options, starting at €4.99/month.</p>
                <div class={'grid lg:grid-cols-3 gap-8 mt-8'}>
                    <div class={'relative text-white font-semibold text-lg bg-black/25 p-4 lg:p-12 rounded-lg shadow-xl'}>
                        <span class="bg-green-200 text-sm font-medium text-center p-1 leading-none rounded-full px-2 dark:bg-green-900 dark:text-green-200 absolute -translate-y-1/2 translate-x-1/3 left-auto top-0 right-0">Starter Plan</span>

                        <h1 class={'text-xl lg:text-4xl font-bold'}>Standard</h1>
                        <h1 class={'text-xl lg:text-2xl font-bold text-gray-300'}>6GB RAM</h1>
                        <div class={'text-gray-400 mt-4'}>
                            <p class={'mb-1'}>
                                <FaSolidMicrochip class={'mb-1 mr-2 inline-flex'} /><span class={'text-blue-500'}>1 vCore</span> on Standard CPU
                            </p>
                            <p class={'my-1'}>
                                <FaSolidMemory class={'mb-1 mr-2 inline-flex'} /><span class={'text-blue-500'}>6GB</span> DDR4 ECC memory
                            </p>
                            <p class={'my-1'}>
                                <FaSolidHardDrive class={'mb-1 mr-2 inline-flex'} /><span class={'text-blue-500'}>40GB</span> SATA SSD Storage
                            </p>
                            <p>
                                <FaSolidEthernet class={'mb-1 mr-2 inline-flex'} /><span class={'text-blue-500'}>5TB</span> DDoS-protected Traffic
                            </p>
                            <hr class={'my-6'} />
                            <p>
                                <FaSolidCheck class={'mb-1 mr-2 inline-flex text-blue-500'} /> 99.5% SLA Uptime
                            </p>
                            <p class={'my-1'}>
                                <FaSolidCheck class={'mb-1 mr-2 inline-flex text-blue-500'} /> SmartMitigate&trade; Anti-DDoS
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
                        <h1 class={'text-xl lg:text-3xl font-bold mt-4 lg:mt-8'}>€4.99/month</h1>
                        <p class={'italic text-gray-400 text-sm font-normal'}>30-day payment. Cancel anytime, no fees, no contract.</p>
                        <div class={'text-right mt-4'}>
                            <Button onClick={() => redirect('https://ctrl.cxmpute.com/order/config/2/d335c229-d744-470b-a18a-3ae4d252d761')}>Order Now</Button>
                        </div>
                    </div>
                    <div class={'relative text-white font-semibold text-lg bg-blue-950 bg-opacity-[7.5%] p-4 lg:p-12 rounded-lg shadow-xl'}>
                        <span class="bg-yellow-200 text-sm font-medium text-center p-1 leading-none rounded-full px-2 dark:bg-yellow-900 dark:text-yellow-200 absolute -translate-y-1/2 translate-x-1/3 left-auto top-0 right-0">Best Value</span>
                        <h1 class={'text-xl lg:text-4xl font-bold'}>Standard</h1>
                        <h1 class={'text-xl lg:text-2xl font-bold text-gray-300'}>12GB RAM</h1>
                        <div class={'text-gray-400 mt-4'}>
                            <p class={'mb-1'}>
                                <FaSolidMicrochip class={'mb-1 mr-2 inline-flex'} /><span class={'text-blue-500'}>4 vCores</span> on Standard CPU
                            </p>
                            <p class={'my-1'}>
                                <FaSolidMemory class={'mb-1 mr-2 inline-flex'} /><span class={'text-blue-500'}>12GB</span> DDR4 ECC memory
                            </p>
                            <p class={'my-1'}>
                                <FaSolidHardDrive class={'mb-1 mr-2 inline-flex'} /><span class={'text-blue-500'}>100GB</span> SATA SSD Storage
                            </p>
                            <p>
                                <FaSolidEthernet class={'mb-1 mr-2 inline-flex'} /><span class={'text-blue-500'}>15TB</span> DDoS-protected Traffic
                            </p>
                            <hr class={'my-6'} />
                            <p>
                                <FaSolidCheck class={'mb-1 mr-2 inline-flex text-blue-500'} /> 99.5% SLA Uptime
                            </p>
                            <p class={'my-1'}>
                                <FaSolidCheck class={'mb-1 mr-2 inline-flex text-blue-500'} /> SmartMitigate&trade; Anti-DDoS
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
                        <h1 class={'text-xl lg:text-3xl font-bold mt-4 lg:mt-8'}>€7.99/month</h1>
                        <p class={'italic text-gray-400 text-sm font-normal'}>30-day payment. Cancel anytime, no fees, no contract.</p>
                        <div class={'text-right mt-4'}>
                            <Button onClick={() => redirect('https://ctrl.cxmpute.com/order/config/2/3a936659-a8c0-4782-b30f-fc001adbf2cc')}>Order Now</Button>
                        </div>
                    </div>
                    <div class={'relative text-white font-semibold text-lg bg-blue-950/25 p-4 lg:p-12 rounded-lg shadow-xl border-2 border-blue-500'}>
                        <span class="bg-red-200 text-sm font-medium text-center p-1 leading-none rounded-full px-2 dark:bg-red-900 dark:text-red-200 absolute -translate-y-1/2 translate-x-1/3 left-auto top-0 right-0">Best Power</span>
                        <h1 class={'text-xl lg:text-4xl font-bold'}>Performance <FaSolidBoltLightning class={'text-yellow-500 inline-flex '} /></h1>
                        <h1 class={'text-xl lg:text-2xl font-bold text-gray-300'}>12GB RAM</h1>
                        <div class={'text-gray-400 mt-4'}>
                            <p class={'mb-1'}>
                                <FaSolidMicrochip class={'mb-1 mr-2 inline-flex'} /><span class={'text-blue-500'}>4 vCores</span> on Performance CPU
                            </p>
                            <p class={'my-1'}>
                                <FaSolidMemory class={'mb-1 mr-2 inline-flex'} /><span class={'text-blue-500'}>12GB</span> DDR4 ECC memory
                            </p>
                            <p class={'my-1'}>
                                <FaSolidHardDrive class={'mb-1 mr-2 inline-flex'} /><span class={'text-blue-500'}>100GB</span> NVMe SSD Storage
                            </p>
                            <p>
                                <FaSolidEthernet class={'mb-1 mr-2 inline-flex'} /><span class={'text-blue-500'}>15TB</span> DDoS-protected Traffic
                            </p>
                            <hr class={'my-6'} />
                            <p>
                                <FaSolidCheck class={'mb-1 mr-2 inline-flex text-blue-500'} /> 99.5% SLA Uptime
                            </p>
                            <p class={'my-1'}>
                                <FaSolidCheck class={'mb-1 mr-2 inline-flex text-blue-500'} /> SmartMitigate&trade; Anti-DDoS
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
                        <h1 class={'text-xl lg:text-3xl font-bold mt-4 lg:mt-8'}>€13.99/month</h1>
                        <p class={'italic text-gray-400 text-sm font-normal'}>30-day payment. Cancel anytime, no fees, no contract.</p>
                        <div class={'text-right mt-4'}>
                            <Button onClick={() => redirect('https://ctrl.cxmpute.com/order/config/2/18a93927-7fa2-4e2c-bbbe-74bf709db436')}>Order Now</Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Target div for scrolling */}
            <div ref={el => target = el} class={'transition-all'}>
                <Configure />
            </div>
        </div>
    );
};
