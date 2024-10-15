"use client"
import GoogleAddressSearch from '@/app/component/GoogleAddressSearch'
import { Button } from '@/components/ui/button'
import { supabase } from '@/utils/supabase/client'
import React, { useState } from 'react'
import { useSession,signIn,signOut } from 'next-auth/react';
import { toast } from 'sonner'
import { Loader } from 'lucide-react'
import { useRouter } from 'next/navigation'
const AddNewListing = () => {
  const [selectedAddress, setSelectedAddress] = useState('');
  const { data: session } = useSession()
  const [loader,setLoader] = useState(false);
  const router = useRouter();
  const nextHandler = async() => {
    console.log(selectedAddress);
    // console.log(session.user.email);
    if(!session){
      toast("Please Login!!")
      return;
    }
    
    setLoader(true);
    const { data, error } = await supabase
      .from('listing')
      .insert([
        { address: selectedAddress, 
          createdBy: session.user?.email,
          profileImage:session.user?.image,
          fullName:session.user?.name
          },
      ])
      .select();
      if (data) {
        setLoader(false);
        console.log("Data Added",data);
        toast("New Address Added for Listing!!")
        router.replace('/edit-listing/'+data[0].id);
      }if(error) {
        setLoader(false);
        console.log(error);
        toast("Server side error!!")
      }

  }
  return (
    <div className='mt-10 md:mx-56 lg-mx-80'>
      <div className='flex flex-col items-center justify-center'>
        <h2 className='font-bold'>Add New Listing</h2>
        <div className='p-5 rounded-lg border shadow-md flex flex-col gap-5 w-full' >
          <h2 className='text-gray-500'>Enter Address which you want</h2>
          <GoogleAddressSearch selectedAddress={(value) => setSelectedAddress(value)} setSelectedAddress={setSelectedAddress} />
          <Button disabled={!selectedAddress} onClick={nextHandler}>{loader? <Loader className="animate-spin"/>:'Next' }</Button>
        </div>
      </div>
    </div>
  )
}

export default AddNewListing
