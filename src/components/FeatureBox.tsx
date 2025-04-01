import { IconTypes } from "solid-icons"

interface Props {
    icon: IconTypes;
    title: string;
    children: string;
}

export default (props: Props) => (
    <div class={'bg-blue-950/50 p-6 rounded-lg shadow-xl text-gray-400'}>
        <p class={'font-bold text-xl text-white mb-4'}>
            <props.icon class={'mr-2 inline-flex text-blue-500'} />
            {props.title}
        </p>
        {props.children}
    </div>
);
