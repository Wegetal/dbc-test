import React, { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import FabButton from "../FabButton";
import TextField from "../TextField";

/**
 * @author Davi Wegner
 * @email davi@wegn.dev
 * @created 27-06-2021
 */
interface Props extends React.HTMLProps<HTMLInputElement> {}
const PassField: React.FC<Props> = (props: Props) => {
  const [hidden, setHidden] = useState<Boolean>(true),
    onClick = (e: any) => {
      setHidden(!hidden);
    };
  return (
    <TextField
      {...props}
      type={hidden ? "password" : "text"}
      endItem={
        hidden ? (
          <FabButton noBackground onClick={onClick}>
            <MdVisibility />
          </FabButton>
        ) : (
          <FabButton onClick={onClick}>
            <MdVisibilityOff />
          </FabButton>
        )
      }
    />
  );
};

export default PassField;
