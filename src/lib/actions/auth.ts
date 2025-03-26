import { signOut } from "@/auth";
import { signIn } from "next-auth/react";

export const login = async () => {
    await signIn("github", {redirectTo: "/"})
}

export const logout = async () => {
    await signOut({redirectTo: "/"})
};