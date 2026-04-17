import classNames from "classnames";
import { JSX } from "solid-js";

export default (props: { children: JSX.Element; hero?: boolean | undefined; className?: string }) => (
    <div class={classNames(
        'glass-card relative overflow-hidden',
        props.hero && 'border-sky-400/30',
        props.className
    )}>
        {props.children}
    </div>
);
