interface MenuItemProps {
  logo: React.ReactNode;
  label: string;
  onClick?: () => void;
  round?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({
  logo,
  label,
  onClick,
  round = false,
}) => {
  return (
    <div
      className={`flex items-center  mt-5 mb-5  ${
        round && "rounded-md"
      } px-2 transition-all hover:scale-95 cursor-pointer dark:bg-gray-800 dark:text-white bg-white text-black`}
      onClick={onClick}
    >
      {logo}
      <div className="justify-center ml-2 font-bold">{label}</div>
    </div>
  );
};

export default MenuItem;
