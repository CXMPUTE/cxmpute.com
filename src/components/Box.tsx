import classNames from "classnames";
import { JSX } from "solid-js";

export default (props: { children: JSX.Element; hero?: boolean | undefined; className?: string }) => (
    <div class={classNames(props.hero && 'border-2 border-blue-300', props.className, 'relative w-full rounded-lg shadow-xl bg-gray-800 p-4 z-20 text-gray-300')}>
        {props.children}
    </div>
);
