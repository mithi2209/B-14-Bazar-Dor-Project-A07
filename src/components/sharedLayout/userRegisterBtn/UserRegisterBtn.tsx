
"use client";

import ProfilePage from '@/app/profile/page';
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';

const UserRegisterBtn = () => {

        const { data: session} = authClient.useSession() ;
        const user = session?.user ;

    return (
      <div>

        {
            user ? 
            <ProfilePage></ProfilePage>
            :
            <div className="flex items-center gap-1 lg:gap-3">
                <Link href="/signIn">

                    <button className="btn btn-ghost hover:border-2 hover:border-green-700 hover:bg-[#f0f5f0] hover:rounded-lg lg:hover:p-5 hover:p-2">
                        <span className="font-semibold text-sm md:text-base">সাইন ইন</span>
                    </button>
            
                </Link>

                <Link href="/signUp">
                    
                    <button className="btn bg-green-700 p-2 lg:p-5 rounded-lg shadow-md shadow-green-200 border-none hover:bg-green-500">
                        <span className="font-semibold text-white text-sm md:text-base">
                            সাইন আপ
                        </span>
                    </button>
                </Link>
            </div>

            
        }
          
      </div>
    );
};

export default UserRegisterBtn;