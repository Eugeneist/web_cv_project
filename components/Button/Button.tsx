import { ButtonHTMLAttributes } from 'react';
import { Chivo_Mono } from '@next/font/google';
import styles from './Button.module.scss';

export const chivo_mono = Chivo_Mono({
  subsets: ['latin'],
  weight: '400',
});
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label, ...props }) => {
  return (
    <button className={`${styles.button} ${chivo_mono.className}`} {...props}>
      <span className={styles.label}>{label}</span>
    </button>
  );
};

export default Button;
