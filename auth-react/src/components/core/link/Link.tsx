import React, { AnchorHTMLAttributes } from 'react';

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  text: string;
  styles: string;
}

function Link({ text, styles, ...props }: LinkProps) {
  return (
    <a className={styles} {...props}>
      {text}
    </a>
  );
}

export default Link;
