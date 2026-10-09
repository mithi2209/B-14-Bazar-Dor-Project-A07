import Link from "next/link";


const SignInPage = () => {
    return (
        <div>
           <Link href="/SignInForm">

                <button className="btn btn-ghost hover:border-2 hover:border-green-700 hover:bg-[#f0f5f0] hover:rounded-lg lg:hover:p-5 hover:p-2">
                    <span className="font-semibold text-sm md:text-base">সাইন ইন</span>
                </button>
           
           </Link>
        </div>
    );
};

export default SignInPage;