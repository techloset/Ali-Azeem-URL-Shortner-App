"use client";

import { useState } from "react";
import Link from "next/link";
import LogoutBtn from "@/components/LogoutBtn";
import Image from "next/image";
import DropDown from "@/public/assets/dropDown.svg";
const Modal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div>
      <div
        className="fixed inset-0 transition-opacity  "
        onClick={onClose}
        aria-hidden="true"
      >
        <div className="p-2 border border-[#353C4A] w-[191px] h-[90px] shadow-lg rounded-[8px] bg-[#181E29] mt-[100px] ml-[1480px] ">
          <div className="text-[#FFFFFF] ml-[34.41px] mr-[34.59px] items-center text-center ">
            <Link href="/resetPassword">
              <h1>Reset Password</h1>
            </Link>
            <LogoutBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

const Drop: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex items-center justify-center ">
      <Image src={DropDown} alt="DropDown" onClick={openModal} />
      {isModalOpen && <Modal onClose={closeModal} />}
    </div>
  );
};

export default Drop;
