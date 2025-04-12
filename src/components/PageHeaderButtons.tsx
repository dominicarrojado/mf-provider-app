import { cn } from '@/lib/utils';
import chatLogo from '@/static/logos/whatsapp.svg?inline';
import Button from './Button';

function PageHeaderButtons() {
  return (
    <div className="hidden lg:flex lg:gap-[12px]">
      <Button
        className={cn(
          'order-none border-transparent bg-[#f2f2f2] p-[3px]',
          'hover:bg-[#e6e6e6] active:bg-[#d9d9d9]'
        )}
      >
        <img src={chatLogo} alt="WhatsApp" className="h-[24px] w-auto" />
      </Button>
      <Button>Login</Button>
    </div>
  );
}

export default PageHeaderButtons;
