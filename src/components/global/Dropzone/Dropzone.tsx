"use client";
import { THEME_ENUM } from "@/enums/enums";
import { useThemeContext } from "@/hooks/useThemeContext";
import { bytesTransformer } from "@/utils/general";
import { TrashIcon } from "@radix-ui/react-icons";
import {
  AspectRatio,
  Box,
  ContextMenu,
  Flex,
  IconButton,
  Strong,
  Text,
} from "@radix-ui/themes";
import Image from "next/image";
import React, { FC, useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

interface DropzoneProps {
  setFile: (file: File) => void;
  fileValue: File;
}

const Dropzone: FC<DropzoneProps> = ({ setFile, fileValue }) => {
  const { theme } = useThemeContext();

  const [bgColor, setBgColor] = useState<string>("");

  useEffect(() => {
    theme === THEME_ENUM.DARK
      ? setBgColor("drop-zone-container-dark")
      : setBgColor("drop-zone-container");

    if (fileValue.name) {
      setBgColor("");
    }
  }, [theme, fileValue]);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      acceptedFiles.forEach((file: File) => {
        setFile(file);
      });
    },
    [setFile]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/png": [".png", ".jpg", ".gif", ".svg"],
    },
    disabled: !!fileValue.name,
  });

  return (
    <Flex gap={"2"} direction={"column"}>
      <Text as="p" weight={"medium"} size={"3"}>
        Banner image
      </Text>
      <ContextMenu.Root>
        <ContextMenu.Trigger>
          <Box
            {...getRootProps()}
            className={`drop-zone-container-main ${bgColor}`}
          >
            <input {...getInputProps()} />
            <Flex
              direction={"column"}
              align={"center"}
              justify={"center"}
              width={"100%"}
            >
              {!fileValue.name ? (
                <Flex
                  p={"5"}
                  direction={"column"}
                  gap={"1"}
                  align={"center"}
                >
                  <Text color="gray" size={"2"}>
                    <Strong>
                      <u>Click to upload</u>
                    </Strong>{" "}
                    or drag and drop
                  </Text>
                  <Text color="gray" size={"1"}>
                    SVG, PNG, JPG or GIF (recommended size 1024x1024px){" "}
                  </Text>
                </Flex>
              ) : (
                <>
                  <Box width={"100%"}>
                    <Flex direction={"row"} width={"100%"} gap={"8"}>
                        <Image
                          src={URL.createObjectURL(fileValue)}
                          alt={fileValue.name}
                          height={120}
                          width={120}
                          style={{
                            aspectRatio: "1 / 1",
                            borderRadius: "8px",
                          }}
                        />
                      <Flex direction={"column"} gap={"2"}>
                        <IconButton color="ruby" variant="soft">
                          <TrashIcon
                            color="red"
                            onClick={() => setFile({} as File)}
                          />
                        </IconButton>
                        <Flex direction={"column"} gap={"1"} align={"start"}>
                          <Text
                            as="p"
                            size={"4"}
                            color="gray"
                            weight={"medium"}
                          >
                            {fileValue.name}
                          </Text>
                          <Text as="p" size={"4"} color="gray" weight={"light"}>
                            {bytesTransformer(fileValue.size)}
                          </Text>
                        </Flex>
                      </Flex>
                    </Flex>
                  </Box>
                </>
              )}
            </Flex>
          </Box>
        </ContextMenu.Trigger>
      </ContextMenu.Root>
    </Flex>
  );
};

export default Dropzone;
