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
      className={`flex items-center p-3 dark:bg-gray-900 dark:text-white bg-slate-50 text-black ${
        round && "rounded-md"
      } shadow-lg transition-all dark:hover:bg-gray-700 cursor-pointer bg-gray-300`}
      onClick={onClick}
    >
      {logo}
      {label}
    </div>
  );
};

export default MenuItem;
