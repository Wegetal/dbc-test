import React, { useState, useContext } from "react";
import styled from "styled-components";
import { TextField, PassField, Paper, Button } from "../../shared";
import * as Auth from "../../../context/Auth";
import { FormTypes } from "../../../types";

/**
 * @author Davi Wegner
 * @email davi@wegn.dev
 * @created 26-06-2021
 */

interface Props {}

const PageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    .paper {
      width: 50%;
    }
    .form {
      padding: 32px;
      width: 100%;
      height: 100%;
    }
    .submit {
      padding: 16px 0px;
    }
    @media (max-width: 800px) {
      .paper {
        width: 85%;
      }
    }
  `,
  Login: React.FC = (props: Props) => {
    const auth = useContext(Auth.Context),
      [form, setForm] = useState<FormTypes.Login>({} as FormTypes.Login),
      onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        auth.onSignIn(form);
      },
      onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        form[e.currentTarget.name as keyof FormTypes.Login] =
          e.currentTarget.value;
        setForm({ ...form });
      };
    return (
      <PageContainer>
        <Paper>
          <form onSubmit={onSubmit} className="form">
            <h2>Login</h2>
            <p>Preencha os campos abaixo para entrar na sua conta.</p>
            <TextField
              name="email"
              onChange={onChange}
              required
              placeholder="Email"
              type="email"
            />
            <PassField
              name="password"
              onChange={onChange}
              required
              placeholder="Senha"
            />
            <div className="submit">
              <Button type="submit" fullWidth>
                Login
              </Button>
            </div>
          </form>
        </Paper>
      </PageContainer>
    );
  };

export default Login;
