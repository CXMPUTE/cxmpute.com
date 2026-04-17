import classNames from 'classnames';
import { FaSolidCircleInfo } from 'solid-icons/fa';

interface AlertProps {
    type: 'success' | 'info' | 'warning' | 'danger';
    className?: string;
    children: any;
}

export default ({ type, className, children }: AlertProps) => {
    return (
        <div
            class={classNames(
                'glass-panel flex items-start gap-4 rounded-[1.75rem] border px-5 py-4 text-slate-100 shadow-lg shadow-slate-950/20',
                {
                    ['border-emerald-500/30 bg-emerald-500/10']: type === 'success',
                    ['border-sky-500/30 bg-sky-500/10']: type === 'info',
                    ['border-amber-500/30 bg-amber-500/10']: type === 'warning',
                    ['border-rose-500/30 bg-rose-500/10']: type === 'danger',
                },
                className,
            )}
        >
            <FaSolidCircleInfo class='mt-1 h-5 w-5 text-current' />
            <div class='text-sm leading-7 text-slate-200'>{children}</div>
        </div>
    );
};
