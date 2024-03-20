"use server";
import { signIn } from "@/auth";

export async function HandleLogin() {
  await signIn();
}
