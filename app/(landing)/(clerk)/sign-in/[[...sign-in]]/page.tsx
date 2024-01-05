import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <SignIn
      afterSignInUrl={"/select-org"}
      appearance={{
        elements: {
          headerTitle: "text-orange-500 font-bold",
          formButtonPrimary: "bg-orange-500",
          footerActionLink: "text-orange-500",
        },
      }}
    />
  );
}
