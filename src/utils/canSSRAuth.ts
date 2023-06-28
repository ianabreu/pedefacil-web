import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from "next";
import { parseCookies, destroyCookie } from "nookies";
import { AuthTokenError } from "../services/errors/AuthTokenError";

export function canSSRAuth<P>(fn: GetServerSideProps<P>) {
  return async (
    context: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<P>> => {
    const cookies = parseCookies(context);
    const token = cookies["@pedefacil.token"];
    if (!token) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }
    try {
      return await fn(context);
    } catch (error) {
      if (error instanceof AuthTokenError) {
        destroyCookie(context, "@pedefacil.token");
        return {
          redirect: {
            destination: "/",
            permanent: false,
          },
        };
      }
    }
  };
}
