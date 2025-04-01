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
    <div class={classNames(backgroundColor ?? 'bg-black/25', isHighlighted && 'border-2 border-blue-500', 'relative text-white font-semibold text-lg p-4 lg:p-12 rounded-lg shadow-xl')}>
        <h1 class={'text-xl lg:text-4xl font-bold'}>{title} {isPerformance && <FaSolidBoltLightning class={'text-yellow-500 inline-flex '} />}</h1>
        <h1 class={'text-xl lg:text-2xl font-bold text-gray-300'}>{subtitle}</h1>
        {icon && (
            <div class={'w-full flex justify-center my-4'}>
                <img src={icon} class={'w-32 h-32'} />
            </div>
        )}
        <div class={'text-gray-400 mt-4'}>
            {features.filter(x => x.isResource).map((feature) => (
                <p class={'my-1'}>
                    <feature.icon class={'inline-flex mr-2 mb-1'} /><span class={'text-blue-500'}>{feature.feature}</span> {feature.description}
                </p>
            ))}
            <hr class={'my-6'} />
            {features.filter(x => !x.isResource).map((feature) => (
                <p class={'my-1'}>
                    <FaSolidCheck class={'mb-1 mr-2 inline-flex text-blue-500'} /> {feature.feature}
                </p>
            ))}
        </div>
        <h1 class={'text-xl lg:text-3xl font-bold mt-4 lg:mt-8'}>€{price}/month</h1>
        {isDiscounted > 0 && <p class={'text-red-400 text-sm mb-4'}>Was €{isDiscounted}/month!</p>}
        <p class={'italic text-gray-400 text-sm font-normal'}>30-day payment. Cancel anytime, no fees, no contract.</p>
        <div class={'text-right mt-4'}>
            <Button onClick={() => {
                // @ts-expect-error this is fine
                window.location = url
            }}>Order Now</Button>
        </div>
    </div>
);
