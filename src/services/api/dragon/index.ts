import { DragonTypes } from "../../../types";
import * as Base from "../base";

/**
 * @author Davi Wegner
 * @email davi@wegn.dev
 * @created 26-06-2021
 */

export const getAll = (): Promise<DragonTypes.Self[]> => {
    return Base.get("/dragon");
  },
  get = (id: string): Promise<DragonTypes.Self> => {
    return Base.get(`/dragon/${id}`);
  },
  create = (dragon: any) => {
    return Base.post("/dragon", dragon, {
      headers: { "Content-Type": "application/json" },
    });
  },
  update = (
    id?: string,
    dragon?: DragonTypes.Form
  ): Promise<DragonTypes.Self> => {
    return Base.put(`/dragon/${id}`, dragon, {
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      return res.data;
    });
  },
  remove = (id: number) => {
    return Base.del(`/dragon/${id}`);
  };
