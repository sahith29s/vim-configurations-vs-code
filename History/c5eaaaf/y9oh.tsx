"use client"
import { useState } from 'react'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation'
import { Axios } from 'axios'


const page = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
        username: "",

    })

    const onSignup = async () => {
    }
    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen py-2 text-white bg-black">
                <h1>Signup</h1>

                <label htmlFor="username">username</label>
                <input
                    className="p-2 mb-4 border-gray-300 rounded-lg boder focus:outline-none focus:border-gray-600"
                    type="text"
                    id='username'
                    value={user.username}
                    onChange={(e) => {setUser({...user , username : e.target.value})}}
                    placeholder='username'
                />

                <label htmlFor="username">username</label>
                <input
                    className="p-2 mb-4 border-gray-300 rounded-lg boder focus:outline-none focus:border-gray-600"
                    type="text"
                    id='username'
                    value={user.username}
                    onChange={(e) => {setUser({...user , username : e.target.value})}}
                    placeholder='username'
                />
                <label htmlFor="username">username</label>
                <input
                    className="p-2 mb-4 border-gray-300 rounded-lg boder focus:outline-none focus:border-gray-600"
                    type="text"
                    id='username'
                    value={user.username}
                    onChange={(e) => {setUser({...user , username : e.target.value})}}
                    placeholder='username'
                />

            </div>

        </>
    )
}

export default page