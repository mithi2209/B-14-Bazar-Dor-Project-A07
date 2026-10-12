
"use client";

import Link from 'next/link';
import { authClient } from '@/lib/auth-client';
import ProfilePage from '../profile/ProfilePage';


const UserRegisterBtn = () => {

        const { data: session } = authClient.useSession() ;
        const user = session?.user ;


    return (
      <div>

        {
            user ? 
            <ProfilePage></ProfilePage>
            :
            <div className="flex items-center gap-1 lg:gap-3">
                <Link id="sign-in-btn" href="/signIn">

                    <a className="btn btn-ghost hover:border-2 hover:border-green-700 hover:bg-[#f0f5f0] hover:rounded-lg lg:hover:p-5 hover:p-2">
                        <span className="font-semibold text-sm md:text-base">সাইন ইন</span>
                    </a>
            
                </Link>

                <Link href="/signUp">
                    
                    <a className="btn bg-green-700 p-2 lg:p-5 rounded-lg shadow-md shadow-green-200 border-none hover:bg-green-500">
                        <span className="font-semibold text-white text-sm md:text-base">
                            সাইন আপ
                        </span>
                    </a>
                </Link>
            </div>

            
        }
          
      </div>
    );
};

export default UserRegisterBtn;