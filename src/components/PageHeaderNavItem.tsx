import { NavGroup } from '@/lib/types';
import { cn } from '@/lib/utils';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import PageHeaderNavItemDropdown from './PageHeaderNavItemDropdown';

function PageHeaderNavItem(props: NavGroup) {
  const { title, items } = props;
  const hasMoreThanOneItem = items.length > 1;
  const firstItem = items[0];
  const isFirstItemExternal = firstItem.isExternal;
  const textClassName = cn(
    'font-poppins relative text-[14px] font-medium',
    'before:absolute before:top-full before:left-0 before:h-[2px] before:w-0 before:bg-[#e03c31] before:transition-[width] before:duration-[0.25s] before:ease-[ease-in-out] before:content-[""]',
    'group-hover:before:w-full',
    'group-focus-within:before:w-full'
  );

  return (
    <div className="group relative gap-[4px] leading-[22px] text-[#505050]">
      {hasMoreThanOneItem ? null : (
        <a
          href={firstItem.href}
          target={isFirstItemExternal ? '_blank' : undefined}
          rel={isFirstItemExternal ? 'noopener noreferrer' : undefined}
          className={cn(textClassName, 'cursor-pointer')}
        >
          {title}
        </a>
      )}
      {hasMoreThanOneItem && (
        <>
          <button
            type="button"
            className="flex cursor-pointer items-center gap-[4px]"
          >
            <span className={textClassName}>{title}</span>
            <ChevronDownIcon
              width={14}
              height={14}
              className={cn(
                'transform transition-transform duration-200',
                'group-hover:-rotate-180',
                'group-focus-within:-rotate-180'
              )}
            />
          </button>
          <PageHeaderNavItemDropdown items={items} />
        </>
      )}
    </div>
  );
}

export default PageHeaderNavItem;
