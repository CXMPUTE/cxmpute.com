import { FaSolidBoltLightning, FaSolidCheck } from "solid-icons/fa";
import { Button } from "./button";
import { IconTypes } from "solid-icons";
import classNames from "classnames";

interface Props {
    url: string;
    title: string;
    subtitle?: string;
    features: Feature[];
    price: number;
    isHighlighted?: boolean;
    isPerformance?: boolean;
    backgroundColor?: string;
    icon?: string;
    isDiscounted?: number;
}

export interface Feature {
    icon?: IconTypes;
    feature: string;
    description?: string;
    isResource: boolean;
}

export default ({ url, title, subtitle, features, price, backgroundColor, isPerformance, isHighlighted, icon, isDiscounted }: Props) => (
    <div class={classNames(
        backgroundColor ?? 'glass-panel',
        isHighlighted && 'border-sky-500/40 shadow-[0_40px_90px_rgba(14,165,233,0.16)]',
        'relative text-white font-semibold text-base p-6 lg:p-10 rounded-[2rem]'
    )}>
        <div class="flex items-center gap-3">
            <h1 class="text-2xl lg:text-4xl font-bold">{title}</h1>
            {isPerformance && <FaSolidBoltLightning class="text-amber-400 text-2xl" />}
        </div>
        <p class="mt-2 text-sm text-slate-300">{subtitle}</p>
        {icon && (
            <div class="w-full flex justify-center my-6">
                <img src={icon} class="w-32 h-32" />
            </div>
        )}
        <div class="mt-6 space-y-4 text-slate-300">
            {features.filter(x => x.isResource).map((feature) => (
                <p class="flex items-center gap-3 text-sm leading-7">
                    <feature.icon class="text-cyan-400" />
                    <span class="font-semibold text-white">{feature.feature}</span>
                    <span class="text-slate-400">{feature.description}</span>
                </p>
            ))}
        </div>
        <hr class="my-7 border-slate-700" />
        <div class="space-y-3 text-slate-300">
            {features.filter(x => !x.isResource).map((feature) => (
                <p class="flex items-center gap-3 text-sm leading-7">
                    <FaSolidCheck class="text-sky-400" />
                    <span>{feature.feature}</span>
                </p>
            ))}
        </div>
        <div class="mt-8">
            <p class="text-3xl font-bold text-white">€{price}/month</p>
            {isDiscounted > 0 && <p class="text-sm text-rose-400">Was €{isDiscounted}/month</p>}
            <p class="mt-2 text-sm italic text-slate-400">30-day payment. Cancel anytime, no fees, no contract.</p>
        </div>
        <div class="text-right mt-6">
            <Button onClick={() => {
                // @ts-expect-error this is fine
                window.location = url
            }}>Order Now</Button>
        </div>
    </div>
);
