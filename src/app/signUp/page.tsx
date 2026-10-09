import Link from "next/link";

const SignUpPage = () => {
    return (
        <div>

            <Link href="/SignUpForm">
                
                <button className="btn bg-green-700 p-2 lg:p-5 rounded-lg shadow-xl hover:bg-green-500">
                    <span className="font-semibold text-white text-sm md:text-base">
                        সাইন আপ
                    </span>
                </button>
            </Link>
            
        </div>
    );
};

export default SignUpPage;