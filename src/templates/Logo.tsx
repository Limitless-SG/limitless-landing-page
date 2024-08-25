import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '44' : '32';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`inline-flex items-center text-gray-900 ${fontStyle}`}>
      <svg
        className="mr-1 stroke-current text-primary-500"
        xmlns="https://images.squarespace-cdn.com/content/v1/65308a08b3d8e91afd9a6297/fbe4684d-564c-44ce-ae7a-0c4ab1c80855/White+Horizontal+Logo.png?format=1500w"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></svg>

      {AppConfig.site_name}
    </span>
  );
};

export { Logo };
