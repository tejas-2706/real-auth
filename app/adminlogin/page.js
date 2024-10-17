"use client"
import React, { useRef } from 'react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
const AdminLogin = () => {
    const UserRef = useRef(null);
    const PasswordRef = useRef(null);
    const router = useRouter();
    const checkAdmin = () => {
        const user = UserRef.current.value;
        const password = PasswordRef.current.value;
        if(user == "admin" && password == "123"){
            router.replace('admin-dashboard');
        }else{
            toast("Wrong Admin Credentials");
        }
        
    }
    return (
        <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100'>
            <div className='bg-white p-8 rounded-lg shadow-lg max-w-md w-full'>
                <h2 className="text-2xl font-bold text-center mb-6">Admin Login</h2>
                {/* <form onSubmit={checkAdmin} action=""> */}
                    <input ref={UserRef} className='w-full bg-white text-black py-2 rounded-lg flex items-center justify-center mb-4 border border-gray-300 hover:bg-gray-100' type="text" name='username' placeholder='Enter Admin Username' />
                    <input ref={PasswordRef} className='w-full bg-white text-black py-2 rounded-lg flex items-center justify-center mb-4 border border-gray-300 hover:bg-gray-100' type="password" name="password" id="" placeholder='Enter Password' />
                    <Button onClick={checkAdmin}  type='submit' className='w-full py-2 rounded-lg flex items-center justify-center mb-4'>Login</Button>
                {/* </form> */}
            </div>
        </div>
    )
}


export default AdminLogin
