import '../../index.css';
import clsx from 'clsx';

interface ButtonProps {
  text: string;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  onClick?: () => void;
}

export default function Button({
  text,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  onClick
}: ButtonProps) {

  const base = 'rounded-md font-semibold transition duration-300 ease-in-out';
  const variantMap = {
    primary: 'bg-black text-white hover:bg-[#006A67] border-black border-2 hover:border-[#CFFFE2]',
    secondary: 'bg-white text-black hover:bg-gray-100 border-black border-2 hover:border-[#CFFFE2]',
    danger: 'bg-red-500 text-white hover:bg-red-600 border-black border-2 hover:border-[#CFFFE2]'
  };
  const sizeMap = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-5 py-2',
    lg: 'px-6 py-3 text-lg'
  };

  const classes = clsx(
    base,
    variantMap[variant],
    sizeMap[size],
    fullWidth && 'w-full'
  );

  return (
    <button className={classes} onClick={onClick}>
      {text}
    </button>
  );
}

