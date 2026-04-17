import { FaSolidCheck, FaSolidX } from "solid-icons/fa";

export default () => (
    <div class="relative overflow-x-auto rounded-[1.75rem] border border-slate-800 bg-slate-950/90 shadow-xl shadow-slate-950/30 p-4">
        <table class="min-w-full text-sm text-left text-slate-300">
            <thead class="text-xs uppercase tracking-[0.15em] text-slate-400 border-b border-slate-800">
                <tr>
                    <th scope="col" class="px-6 py-4"></th>
                    <th scope="col" class="px-6 py-4 text-lg font-extrabold text-white">
                        <img src={'https://i.postimg.cc/zX0BVThh/Untitled-design-2.png'} width={32} class={'inline-flex mb-1'} /> CXMPUTE
                    </th>
                    <th scope="col" class="px-6 py-4">
                        <img src={'https://www.hetzner.com/_resources/themes/hetzner/images/logo/hetzner-logo.svg?m=1742307103'} width={84} />
                    </th>
                    <th scope="col" class="px-6 py-4">
                        <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Logo_OVH.svg/1280px-Logo_OVH.svg.png'} width={84} />
                    </th>
                    <th scope="col" class="px-6 py-4">
                        <img src={'https://i.ibb.co/HDJfRvJM/a5f7dcbf464602235978823b6d29e1a7.png'} width={84} />
                    </th>
                </tr>
            </thead>
            <tbody class="divide-y divide-slate-800">
                <tr class="bg-slate-950/70">
                    <th scope="row" class="px-6 py-4 font-medium text-slate-100">vCPU Count</th>
                    <td class="px-6 py-4 text-white">4</td>
                    <td class="px-6 py-4">4</td>
                    <td class="px-6 py-4">4</td>
                    <td class="px-6 py-4">4</td>
                </tr>
                <tr class="bg-slate-950/60">
                    <th scope="row" class="px-6 py-4 font-medium text-slate-100">Memory (GB)</th>
                    <td class="px-6 py-4 text-slate-100">12GB</td>
                    <td class="px-6 py-4">8GB</td>
                    <td class="px-6 py-4">8GB</td>
                    <td class="px-6 py-4">8GB</td>
                </tr>
                <tr class="bg-slate-950/70">
                    <th scope="row" class="px-6 py-4 font-medium text-slate-100">Storage (GB)</th>
                    <td class="px-6 py-4 text-slate-100">100GB</td>
                    <td class="px-6 py-4">80GB</td>
                    <td class="px-6 py-4">80GB</td>
                    <td class="px-6 py-4 text-slate-100">160GB</td>
                </tr>
                <tr class="bg-slate-950/60">
                    <th scope="row" class="px-6 py-4 font-medium text-slate-100">DDoS Protection</th>
                    <td class="px-6 py-4 text-emerald-400"><FaSolidCheck /></td>
                    <td class="px-6 py-4 text-rose-400"><FaSolidX /></td>
                    <td class="px-6 py-4 text-emerald-400"><FaSolidCheck /></td>
                    <td class="px-6 py-4 text-rose-400"><FaSolidX /></td>
                </tr>
                <tr class="bg-slate-950/70">
                    <th scope="row" class="px-6 py-4 font-medium text-slate-100">Automatic Backups</th>
                    <td class="px-6 py-4 text-emerald-400"><FaSolidCheck /></td>
                    <td class="px-6 py-4 text-rose-400"><FaSolidX /></td>
                    <td class="px-6 py-4 text-rose-400"><FaSolidX /></td>
                    <td class="px-6 py-4 text-rose-400"><FaSolidX /></td>
                </tr>
                <tr class="bg-slate-950/60">
                    <th scope="row" class="px-6 py-4 font-medium text-slate-100">User Experience</th>
                    <td class="px-6 py-4 text-slate-100">Modern, unified dashboard</td>
                    <td class="px-6 py-4">Legacy panel</td>
                    <td class="px-6 py-4">Legacy panel</td>
                    <td class="px-6 py-4">Legacy panel</td>
                </tr>
                <tr class="bg-slate-950/70">
                    <th scope="row" class="px-6 py-4 font-medium text-slate-100">Monthly Cost</th>
                    <td class="px-6 py-4 text-white">€7.99</td>
                    <td class="px-6 py-4">~€8.16</td>
                    <td class="px-6 py-4">~€21.67</td>
                    <td class="px-6 py-4">~€43.89</td>
                </tr>
            </tbody>
        </table>
    </div>
);
