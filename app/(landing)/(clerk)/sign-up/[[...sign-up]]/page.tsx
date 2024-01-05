import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <SignUp
      afterSignUpUrl={"/select-org"}
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
