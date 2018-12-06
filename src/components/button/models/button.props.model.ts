import { MouseEventHandler } from 'react';

export default interface ButtonProps {
    modifier?: string;
    text: string;
    buttonAction: MouseEventHandler;
  }