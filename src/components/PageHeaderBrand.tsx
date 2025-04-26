import { HTMLProps } from 'react';
import { cn } from '@/lib/utils';
import brandLogo from '@/static/logos/propertyguru-finance.svg?inline';

function PageHeaderBrand(props: HTMLProps<HTMLAnchorElement>) {
  const { children, ...otherProps } = props;

  return (
    <a {...otherProps}>
      <img
        src={brandLogo}
        alt="PropertyGuru Finance"
        className={cn('h-[30px] w-auto', 'lg:h-[35px]')}
      />
      {children}
    </a>
  );
}

export default PageHeaderBrand;
