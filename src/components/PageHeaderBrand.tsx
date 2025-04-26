import { HTMLProps } from 'react';
import brandLogo from '@/static/logos/propertyguru-finance.svg?inline';
import { cn } from '@/lib/utils';
import { BRAND_URL } from '@/lib/constants';

function PageHeaderBrand(props: HTMLProps<HTMLAnchorElement>) {
  const { children } = props;

  return (
    <a href={BRAND_URL}>
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
