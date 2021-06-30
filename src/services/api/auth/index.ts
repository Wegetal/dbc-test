/**
 * @author Davi Wegner
 * @email davi@wegn.dev
 * @created 26-06-2021
 */

export const getToken = () => {
    return localStorage.getItem("token");
  },
  signIn = (form: any) => {
    return new Promise<string>((res, rej) => {
      res(Math.random().toString(36).substring(7));
    }).then((res: string) => {
      localStorage.setItem("token", res);
      return res;
    });
  },
  signOut = () => {
    return localStorage.removeItem("token");
  };
