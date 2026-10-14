
"use client" ;


import { toast } from "react-toastify";
import { useRouter, useSearchParams  } from "next/navigation";
import { useEffect } from "react";






const SignInRequiredToast = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

   useEffect(() => {
  if (searchParams.get("signInRequired") !== "true") return;

  const callbackUrl = searchParams.get("callbackUrl");
  if (!callbackUrl?.startsWith("/product/")) return;

  toast.info("You need to sign in first to view the product details.", {
    toastId: "sign-in-required",
  });

  router.replace(`/signIn?callbackUrl=${encodeURIComponent(callbackUrl)}`, {
        scroll: false,
    });
    }, [searchParams, router]);     

        return null;
};

export default SignInRequiredToast;