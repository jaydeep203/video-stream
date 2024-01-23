"use client";
import React, { useCallback, useState } from 'react'
import Modal from './Modal'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {Info} from 'lucide-react';
import {FcGoogle} from "react-icons/fc"
import {FaGithub} from "react-icons/fa"
import { signIn } from 'next-auth/react';
import useLoginModal from '../hooks/useLoginModal';
import axios from "axios";
import { useToast } from '@/components/ui/use-toast';


const LoginProvider = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [varient, setVarient] = useState("login");

    const {toast} = useToast();

    const loginModal = useLoginModal();

    const toggleVarient = useCallback(()=>{
        setVarient((currentVarient) => currentVarient=="login"? "register" : "login");
    }, []);

    const login = useCallback(async()=>{
        try{
            await signIn("credentials", {
                email,
                password
            });

            loginModal.onClose();

        }catch(error){
            console.log(error);
        }
    },[email, password, loginModal]);

    const register = useCallback(async() => {
        await axios.post("/api/register", {
            email,
            name,
            password
        });

        login();
        
        loginModal.onClose();
    },[email, name, password, loginModal, login]);

    const socialAction = (action:string) => {

        signIn(action, {redirect:false})
        .then((callback) => {
            if(callback?.error){
                toast({
                    variant:"destructive",
                    title:"Invalide credentials!"
                })
            }

            if(callback?.ok && !callback?.error){
                toast({
                    variant:"default",
                    title:"Logged In!"
                })
            }
        })
        .finally(() => loginModal.onClose());

     }


  return (
    <Modal
        header={varient=="login"? "Sign In" : "Sign Up"}
    >
        <>
            <Input 
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                type='text'
                placeholder='Email'
                className='
                    py-4
                    text-white
                '
            />
            {
                varient == "register" && (
                    <Input 
                        value={name}
                        onChange={(e)=> setName(e.target.value)}
                        type='text'
                        placeholder='Name'
                        className='
                            py-4
                            text-white
                    '
                    />
                )
            }
            <Input 
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                type='password'
                placeholder='Password'
                className='
                    py-4
                    text-white
                '
            />

            {
                varient=="login" && (
                    <div className='
                        text-neutral-300
                        flex
                        text-sm
                        flex-col
                    '>
                        <p className='flex gap-1 items-center'> <Info className='h-4 w-4' /> You can login with this for test.</p>
                        <span className='text-neutral-400'>Email: test@mail.com</span>
                        <span className='text-neutral-400'>Password: test</span>
                    </div>
                )
            }
            <Button
                onClick={varient=="login"? login: register}
                className='
                    bg-pink-600
                    hover:bg-pink-700
                '
            >
                {varient == "login" ? "Login" : "Register"}
            </Button>

            <div className='
                flex
                flex-row
                justify-center
                gap-3
                mt-3
            '>
                {/* <div 
                onClick={() => socialAction("google")}
                className='
                    bg-white
                    p-2
                    rounded-full
                '>
                    <FcGoogle className='h-7 w-7' />
                </div> */}

                <div 
                    onClick={() => socialAction("github")}
                className='
                    bg-white
                    p-2
                    rounded-full
                '>
                    <FaGithub className='h-7 w-7' />
                </div>
            </div>
            <div className='
                mt-5
                flex
                flex-row
                gap-1
                text-neutral-400
                text-sm
                
            '>
                <p>{varient=="login"? "First time using VideoStream?": "Already Have an Account?"}</p>
                <span onClick={toggleVarient} className='text-white cursor-pointer'>
                    {varient=="login"? "Create an Account": "Login"}
                </span>
            </div>
        </>
    </Modal>
  )
}

export default LoginProvider