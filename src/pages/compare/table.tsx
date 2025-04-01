import { FaSolidCheck, FaSolidX } from "solid-icons/fa";

export default () => (
    <div class="relative overflow-x-auto">
        <table class="text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                    </th>
                    <th scope="col" class="px-6 py-4 text-lg font-extrabold text-white">
                        <img src={'https://i.postimg.cc/zX0BVThh/Untitled-design-2.png'} width={32} class={'inline-flex mb-1'} /> CXMPUTE
                    </th>
                    <th scope="col" class="px-6 py-3">
                        <img src={'https://www.hetzner.com/_resources/themes/hetzner/images/logo/hetzner-logo.svg?m=1742307103'} width={84} />
                    </th>
                    <th scope="col" class="px-6 py-3">
                        <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Logo_OVH.svg/1280px-Logo_OVH.svg.png'} width={84} />
                    </th>
                    <th scope="col" class="px-6 py-3">
                        <img src={'https://i.ibb.co/HDJfRvJM/a5f7dcbf464602235978823b6d29e1a7.png'} width={84} />
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        vCPU Count
                    </th>
                    <td class="px-6 py-4">
                        4
                    </td>
                    <td class="px-6 py-4">
                        4
                    </td>
                    <td class="px-6 py-4">
                        4
                    </td>
                    <td class="px-6 py-4">
                        4
                    </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Memory (GB)
                    </th>
                    <td class="px-6 py-4 text-white">
                        12GB
                    </td>
                    <td class="px-6 py-4">
                        8GB
                    </td>
                    <td class="px-6 py-4">
                        8GB
                    </td>
                    <td class="px-6 py-4">
                        8GB
                    </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Storage (GB)
                    </th>
                    <td class="px-6 py-4">
                        100GB
                    </td>
                    <td class="px-6 py-4">
                        80GB
                    </td>
                    <td class="px-6 py-4">
                        80GB
                    </td>
                    <td class="px-6 py-4 text-white">
                        160GB
                    </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        DDoS Protection
                    </th>
                    <td class="px-6 py-4 text-white">
                        <FaSolidCheck />
                    </td>
                    <td class="px-6 py-4">
                        <FaSolidX />
                    </td>
                    <td class="px-6 py-4 text-white">
                        <FaSolidCheck />
                    </td>
                    <td class="px-6 py-4">
                        <FaSolidX />
                    </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Automatic Backups
                    </th>
                    <td class="px-6 py-4 text-white">
                        <FaSolidCheck />
                    </td>
                    <td class="px-6 py-4">
                        <FaSolidX />
                    </td>
                    <td class="px-6 py-4">
                        <FaSolidX />
                    </td>
                    <td class="px-6 py-4">
                        <FaSolidX />
                    </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        DDoS Protection
                    </th>
                    <td class="px-6 py-4 text-white">
                        <FaSolidCheck />
                    </td>
                    <td class="px-6 py-4">
                        <FaSolidX />
                    </td>
                    <td class="px-6 py-4 text-white">
                        <FaSolidCheck />
                    </td>
                    <td class="px-6 py-4">
                        <FaSolidX />
                    </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Monthly Cost
                    </th>
                    <td class="px-6 py-4 text-white">
                        €7.99
                    </td>
                    <td class="px-6 py-4">
                        ~€8.16
                    </td>
                    <td class="px-6 py-4">
                        ~€21.67   
                    </td>
                    <td class="px-6 py-4">
                        ~€43.89
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
);
