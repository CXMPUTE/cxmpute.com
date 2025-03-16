import classNames from 'classnames';
import { Options } from './types';
import styles from './style.module.css';

const Button = (props) => {
  const { children, shape, size, variant, className, ...rest } = props;
  const ref = props.ref || (el => el); // Handling ref

  return (
    <button
      ref={ref}
      class={classNames(
        styles.button,
        styles.primary,
        {
          [styles.secondary]: variant === Options.Variant.Secondary,
          [styles.square]: shape === Options.Shape.IconSquare,
          [styles.small]: size === Options.Size.Small,
          [styles.large]: size === Options.Size.Large,
        },
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

const TextButton = (props) => {
  const { className, ...rest } = props;
  return <Button class={classNames(styles.text, className)} {...rest} />;
};

const DangerButton = (props) => {
  const { className, ...rest } = props;
  return <Button class={classNames(styles.danger, className)} {...rest} />;
};

const _Button = Object.assign(Button, {
  Sizes: Options.Size,
  Shapes: Options.Shape,
  Variants: Options.Variant,
  Text: TextButton,
  Danger: DangerButton,
});

export default _Button;
