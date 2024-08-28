"use client";
import Dropzone from "@/components/global/Dropzone/Dropzone";
import InputLabel from "@/components/global/InputLabel/InputLabel";
import { useErrorContext } from "@/hooks/useErrorContext";
import { validURL } from "@/utils/general";
import { Link2Icon } from "@radix-ui/react-icons";
import { Flex } from "@radix-ui/themes";
import React, { FC, useEffect, useState } from "react";

interface VideoImageSectionProps {
  video: string;
  setVideo: (video: string) => void;
  image: File;
  setImage: (image: File) => void;
}

export const VideoImageSection: FC<VideoImageSectionProps> = ({
  video,
  setVideo,
  image,
  setImage,
}) => {
  const { handleError, deleteError } = useErrorContext();

  useEffect(() => {
    if (!validURL(video) && video !== "") {
      handleError("Invalid video link");
    } else if (validURL(video) || video === "") {
      deleteError("Invalid video link");
    }
  }, [video]);

  return (
    <Flex width={"100%"} direction={"column"} gap={"4"}>
      <InputLabel
        label="Video"
        placeholder="Add video link..."
        setValue={(data) => {
          setVideo(data);
        }}
        value={video}
        Icon={Link2Icon}
        error={!validURL(video) && video !== ""}
      />
      <Dropzone fileValue={image} setFile={setImage} />
    </Flex>
  );
};
