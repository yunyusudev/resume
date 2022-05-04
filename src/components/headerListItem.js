import { forwardRef } from 'react';
const HeaderListItem = forwardRef(({ href, text, onClick,transition }, ref) => (
    <li><a ref={ref} href={href} onClick={onClick}>
    {text}
  </a></li>
));

export default HeaderListItem;
