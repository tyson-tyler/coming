import { Channel } from "@prisma/client";
import Link from "next/link";

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
      } shadow-lg transition-all hover:scale-75 cursor-pointer dark:bg-gray-800 dark:text-white bg-gray-200 text-black`}
      onClick={onClick}
    >
      {logo}
      <div className="justify-center hidden lg:flex ml-2 font-bold">
        {label}
      </div>
    </div>
  );
};

export default MenuItem;
