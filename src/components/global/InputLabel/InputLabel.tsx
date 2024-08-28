import {
  Box,
  Flex,
  IconProps,
  Text,
  TextArea,
  TextField,
} from "@radix-ui/themes";
import React, { FC, ForwardRefExoticComponent, RefAttributes } from "react";

type InputLabelProps = {
  label: string;
  placeholder: string;
  value: any;
  setValue: (data: any) => void;
  area?: boolean;
  Icon?: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
  error?: boolean;
};

const InputLabel: FC<InputLabelProps> = ({
  label,
  placeholder,
  value,
  setValue,
  area,
  Icon,
  error,
}) => {
  return (
    <Flex gap={"2"} direction={"column"}>
      <Text as="p" weight={"medium"} size={"3"}>
        {label}
      </Text>
      <Box
        width={"100%"}
        style={error ? { border: `1px solid red`, borderRadius: "8px" } : {}}
      >
        {!area ? (
          <TextField.Root
            size={"3"}
            placeholder={placeholder}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            color={error ? "red" : "grass"}
          >
            <TextField.Slot>{Icon && <Icon />}</TextField.Slot>
          </TextField.Root>
        ) : (
          <TextArea
            size={"3"}
            placeholder={placeholder}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          ></TextArea>
        )}
      </Box>
    </Flex>
  );
};

export default InputLabel;
