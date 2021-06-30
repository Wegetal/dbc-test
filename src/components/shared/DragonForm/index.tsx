import React, { useContext } from "react";
import { useState } from "react";
import styled from "styled-components";
import Button from "../Button";
import Paper from "../Paper";
import TextField from "../TextField";
import { DragonTypes } from "../../../types";
import { Notification } from "../../../context";

/**
 * @author Davi Wegner
 * @email davi@wegn.dev
 * @created 29-06-2021
 */

interface Props {
  dragon?: DragonTypes.Self;
  onSubmitCallback: (form: DragonTypes.Form) => Promise<DragonTypes.Self>;
}

const DragonFormContainer = styled(Paper)`
    padding: 16px;
    width: 50%;
    @media (max-width: 800px) {
      width: 85%;
    }
  `,
  DragonForm: React.FC<Props> = (props: Props): JSX.Element => {
    const { dragon, onSubmitCallback } = props,
      { onSetMessage } = useContext(Notification.Context),
      [loading, setLoading] = useState<boolean>(false),
      [form, setForm] = useState<DragonTypes.Form>(
        (dragon || {
          name: "",
          type: "",
          histories: "",
        }) as DragonTypes.Form
      ),
      onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        form[e.currentTarget.name as keyof DragonTypes.Form] =
          e.currentTarget.value;
        setForm({ ...form });
      },
      onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        onSubmitCallback(form)
          .then((res) => {
            onSetMessage({
              text: "Operação realizada com sucesso",
              type: "success",
            });
            setLoading(false);
          })
          .catch((err) => {
            onSetMessage({
              text: "Houve algum erro na operação",
              type: "error",
            });
          });
      };

    return (
      <DragonFormContainer>
        <form onSubmit={onSubmit}>
          <TextField
            value={form?.name}
            required
            onChange={onChange}
            name="name"
            placeholder="Nome"
          />
          <TextField
            value={form.type}
            required
            onChange={onChange}
            name="type"
            placeholder="Tipo"
          />
          <TextField
            value={form?.histories}
            required
            onChange={onChange}
            name="histories"
            placeholder="Histories"
            multiline
          />
          <Button loading={!!loading} type="submit" fullWidth>
            {dragon ? "Atualizar" : "Criar"}
          </Button>
        </form>
      </DragonFormContainer>
    );
  };

export default DragonForm;
