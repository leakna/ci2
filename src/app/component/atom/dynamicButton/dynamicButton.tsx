const DynamicButton = ({
  title = "default",
  variant = "primary",
  size = "small",
  ...props
}: {
  title?: string;
  variant?: 'primary'|'secondary'|'danger'|'warning'|'success';
  size?: 'small'|'medidum'|'large';
  props:HTMLButtonElement
  
}) => {
  const variantObj: any = {
    primary: "bg-blue-500",
    secondary: "bg-gray-500",
    danger: "bg-red-500",
    warning: "bg-yellow-500",
    success: "bg-green-500",
    
  };
  const sizeObj:any={
    small: 'text-sm py-1 px-2',
    medium: 'text-md py-2 px-4',
    large: 'text-lg py-3 px-6',
  }
  return <button className={`${variantObj[variant]} ${sizeObj[size]}`} {...props}>{title}</button>;
};

export default DynamicButton;
