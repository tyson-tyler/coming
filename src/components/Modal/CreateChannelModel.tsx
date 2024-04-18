"use client";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Avatar, { AvatarSize } from "../Avatar";
import Button from "../shared/Button";
import { useContext, useState } from "react";
import Input from "../shared/Input";
import axios from "axios";
import MediaUpload from "../MediaUpload";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { CreateChannelModalContext } from "@/context/CreateChannelModelContext";

const CreateChannelModel = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const createChannelModal = useContext(CreateChannelModalContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      handle: "",
      imageSrc: "",
    },
  });
  const imageSrc = watch("imageSrc");
  const handleImageUpload = (value: string) => {
    setValue("imageSrc", value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    axios
      .post("/api/channels", data)
      .then(() => {
        toast.success("Account Ready");
        createChannelModal?.onClose();
        router.refresh();
      })
      .catch(() => {
        toast.error("Something went wrong", {
          style: { background: "#333", color: "fff" },
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return createChannelModal?.isOpen ? (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center z-50 dark:bg-gray-800 w-3/5 bg-slate-50 text-black dark:text-white shadow-md max-w-2xl rounded-xl">
      <h1 className="usespan font-bold text-xl p-3 border-b border-gray-500 text-center">
        Welcome here
      </h1>
      <div className="flex flex-col items-center py-4 gap-5">
        <Avatar size={AvatarSize.large} imageSrc={imageSrc} />
        <MediaUpload onChange={handleImageUpload}>
          <Button type="primary" className="p-2">
            Upload Image
          </Button>
        </MediaUpload>
        <Input
          id="name"
          label="Name"
          disabled={isLoading}
          register={register}
          errors={errors}
          pattern={{ value: /^[a-zA-Z0-9 ]*$/, message: "Invalid name format" }}
          required
          className="w-3/4 mb-3"
        />
        <Input
          id="handle"
          label="username"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
          className="w-3/4"
        />
      </div>
      <div className="p-2 border-t border-gray-600 flex justify-end gap-3">
        <Button
          type="secondary"
          className="p-2"
          onClick={createChannelModal.onClose}
        >
          Cancel
        </Button>
        <Button type="primary" className="p-2" onClick={handleSubmit(onSubmit)}>
          Create Channel
        </Button>
      </div>
    </div>
  ) : null;
};

export default CreateChannelModel;
