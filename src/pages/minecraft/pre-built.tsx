import PricingBox from "../../components/PricingBox"
import { defaultFeatures } from ".";
import plans from '../../../data/minecraft.data';
import { FaSolidBoxArchive, FaSolidEthernet, FaSolidMemory } from "solid-icons/fa";

export default () => (
    <div class={'grid lg:grid-cols-3 gap-8 mt-6'}>
        {plans.map((plan) => (
            <PricingBox
                url={plan.link}
                price={plan.price}
                isDiscounted={plan.isDiscounted}
                title={plan.name}
                subtitle={`${plan.memory}GB RAM`}
                icon={plan.icon}
                isHighlighted={plan.featured}
                features={[
                    {
                        icon: FaSolidMemory,
                        feature: `${plan.memory}GB`,
                        description: 'DDR4 ECC Memory',
                        isResource: true,
                    },
                    {
                        icon: FaSolidEthernet,
                        feature: 'Unmetered',
                        description: 'Bandwidth',
                        isResource: true,
                    },
                    {
                        icon: FaSolidBoxArchive,
                        feature: plan.backups.toString(),
                        description: 'Automatic Backup Slots',
                        isResource: true,
                    },
                    ...defaultFeatures
                ]}
            />
        ))}
    </div>
)
