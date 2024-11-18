import { AuthTokenInterface } from "@/interfaces/auth-token.interface";
import { POST } from "@/lib/api";
import { UserSchemaType } from "@/schemas/user.schema";

export const login = async (data: UserSchemaType) => {
  const resp = await POST<UserSchemaType, AuthTokenInterface>(
    "auth/login",
    data
  );

  if (resp instanceof Error) return resp;
  localStorage.setItem("token", JSON.stringify(resp));
  localStorage.setItem("AUTH_TOKEN", resp.token);
  return resp;
};

export const isLogin = async () => {
  const stringToken = localStorage.getItem("token");
  if (!stringToken) return false;
  const { expireAt } = JSON.parse(stringToken) as AuthTokenInterface;
  const expire = new Date(expireAt!);
  if (expire < new Date()) return false;
  return true;
};
