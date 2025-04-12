import { Button as HeadlessButton } from '@headlessui/react';
import { cn } from '@/lib/utils';
import { forwardRef, type ButtonHTMLAttributes } from 'react';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'outline' | 'light';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { children, className, variant = 'outline', ...otherProps } = props;

  return (
    <HeadlessButton
      {...otherProps}
      ref={ref}
      className={cn(
        'inline-block cursor-pointer rounded-[8px] px-[16px] py-[3px] text-[14px] leading-[24px] font-medium transition-colors',
        {
          'border border-[#505050] bg-white text-[#505050] hover:bg-[#F2F2F2] active:bg-[#E6E6E6]':
            variant === 'outline',
          'border border-white bg-white py-[7px] text-[#007C80] hover:bg-[#F2F2F2] hover:text-[#006C70] active:bg-[#E6E6E6] active:text-[#005C60]':
            variant === 'light',
        },
        className
      )}
    >
      {children}
    </HeadlessButton>
  );
});

Button.displayName = 'Button';

export default Button;
