/**
 * @author Davi Wegner
 * @email davi@wegn.dev
 * @created 30-06-2021
 */

export interface Self {
  name: string;
  type: string;
  histories: string[] | string;
  createdAt: string;
  id: number;
}
export interface Form {
  id?: string;
  name: string;
  type: string;
  histories: string;
}

export interface Create extends Form {}
export interface Edit extends Form {}
