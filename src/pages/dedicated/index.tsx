import { FaSolidArrowRight } from "solid-icons/fa";
import dedicatedData from "../../../data/dedicated.data";
import { Button } from "../../components/button";

export default () => {
    const options = dedicatedData;

    return (
        <div class={'max-w-7xl z-20'}>
            <div class={'grid lg:grid-cols-3 gap-8 w-full place-items-center'}>
                <div class={'text-left w-full z-20 col-span-2'}>
                    <div class="py-8 px-4 mx-auto lg:py-16">
                        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">CXMPUTE Dedicated</h1>
                        <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
                            Our dedicated servers, hosted in European datacentres, offer fantastic value for money on a larger, more performant scale than VPS.
                            Check our stock below for more information.
                        </p>
                    </div>
                </div>
            </div>


            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Location
                            </th>
                            <th scope="col" class="px-6 py-3">
                                CPU Type
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Memory
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Storage
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Network
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" class="px-6 py-3">
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {options.map((option) => (
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <div class={'inline-flex'}>
                                        <img class={'w-8'} src={option.location.logo} />
                                        <p class={'font-bold my-auto ml-1'}>{option.location.title}</p>
                                    </div>
                                    <p class={'text-sm text-gray-400 italic'}>{option.location.description}</p>
                                </th>
                                <td class="px-6 py-4 text-white">
                                    {option.cpu.model}
                                    <p class={'text-gray-400 mt-1'}>
                                        {option.cpu.specs}
                                    </p>
                                </td>
                                <td class="px-6 py-4 text-white">
                                    {option.memory.size}
                                    <p class={'text-gray-400 mt-1'}>
                                        {option.memory.specs}
                                    </p>
                                </td>
                                <td class="px-6 py-4 text-white">
                                    {option.storage.size}
                                    <p class={'text-gray-400 mt-1'}>
                                        {option.storage.specs}
                                    </p>
                                </td>
                                <td class="px-6 py-4 text-white">
                                    {option.network.speed}
                                    <p class={'text-gray-400 mt-1'}>
                                        {option.network.specs}
                                    </p>
                                </td>
                                <td class="px-6 py-4 text-blue-400 brightness-150 font-bold text-lg">
                                    €{option.price}/mo
                                    <p class={'text-gray-500 text-sm font-normal'}>
                                        {option.available}
                                    </p>
                                </td>
                                <td class="px-6 py-4">
                                    <a href={'https://ctrl.cxmpute.com/createticket'}>
                                    <Button>Order Now</Button>
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <p class={'text-gray-500 mt-1 italic'}>Dedicated server orders must be processed through a support ticket on our control panel, CTRL.</p>
            </div>
            <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 my-8">
                <div class={'grid lg:grid-cols-5'}>
                    <div class={'col-span-4'}>
                        <h1 class="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">Not what you&apos;re looking for?</h1>
                        <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">
                            While they are not listed on this page with our star offers, CXMPUTE provides many more dedicated server configurations - including systems located in North America.
                            We highly recommend getting in touch with our specialist team who can put together a plan to suit your needs best.
                        </p>
                        <a href={'https://ctrl.cxmpute.com/createticket'}>
                            <Button>Contact Us <FaSolidArrowRight class={'ml-2'} /></Button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
};
