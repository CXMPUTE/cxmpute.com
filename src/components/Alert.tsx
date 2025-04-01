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
                'flex items-center border-l-8 text-gray-50 rounded-md shadow px-4 py-3',
                {
                    ['border-green-500 bg-green-500/25']: type === 'success',
                    ['border-blue-500 bg-blue-500/25']: type === 'info',
                    ['border-yellow-500 bg-yellow-500/25']: type === 'warning',
                    ['border-red-500 bg-red-500/25']: type === 'danger',
                },
                className,
            )}
        >
            <FaSolidCircleInfo class={'mt-1 mr-2'} />
            {children}
        </div>
    );
};
