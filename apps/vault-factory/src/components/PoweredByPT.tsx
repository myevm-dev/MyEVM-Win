import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

interface PoweredByPTProps {
  className?: string;
}

export const PoweredByPT = (props: PoweredByPTProps) => {
  const { className } = props;

  return (
    <div className={classNames('flex flex-col gap-2 items-center', className)}>
      <Link href="https://myevm.casa" legacyBehavior>
        <a target="_blank" rel="noopener noreferrer">
          <Image
            src="/ptLogo.svg"
            alt="PoolTogether Logo"
            width={143}
            height={52}
            className="w-28 h-auto"
          />
        </a>
      </Link>
    </div>
  );
};
