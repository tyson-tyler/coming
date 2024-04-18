"use client";
import { useContext, useState } from "react";
import SignInButton from "./SignInButton";
import { CurrentUserContext } from "@/context/CurrentUserContext";
import Avatar, { AvatarSize } from "../Avatar";
import UserMenu from "../UserMenu";

const UserOptions = () => {
  const currentUser = useContext(CurrentUserContext);

  const [menuOpen, setMenuOpen] = useState(false);
  return currentUser ? (
    <>
      <div className="flex items-center gap-4 mr-4">
        <Avatar
          size={AvatarSize.medium}
          imageSrc={currentUser.image}
          onClick={() => setMenuOpen(true)}
        />
      </div>
      {menuOpen ? <UserMenu onClose={() => setMenuOpen(false)} /> : null}
    </>
  ) : (
    <SignInButton />
  );
};

export default UserOptions;
