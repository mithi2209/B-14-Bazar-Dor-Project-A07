
import { Suspense } from "react";
import SignInFormPage from "../signInForm/page";
import GlobalLoading from "../loading";


const SignInPage = () => {

 

  return (

    <div>
      <Suspense fallback={<GlobalLoading></GlobalLoading>}>
        <SignInFormPage></SignInFormPage>
      </Suspense>
    </div>
    
  );
};

export default SignInPage;
