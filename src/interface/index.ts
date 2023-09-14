export type buttonProps = {
  text: string;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
  loading?: boolean;
  type?: string;
  disable?: boolean;
  outline?: boolean;
  style?: React.CSSProperties | undefined;
  className?: string | undefined;
};
