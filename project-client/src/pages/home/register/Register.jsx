import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import OAuth from './OAuth'

export default function Register() {
    
    const [formData, setFormData] = useState({})
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            setLoading(true)
            const response = await fetch('/project-server/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            const data = await response.json()
            if (response.ok) {
                setLoading(false)
                setError(null)
                navigate('/login')
            } else {
                setLoading(false)
                setError(data.message)
                return
            }
        } catch (error) {
            setLoading(false)
            setError(error.message)
        }
        setLoading(false)
    }

    return (
        <>
            <div className='p-3 max-w-lg mx-auto'>Register</div>
            <div className='p-3 max-w-lg mx-auto'>
            <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
            <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                <label htmlFor='email' className='hidden'>Email</label>
                <input 
                    type="email" 
                    placeholder='Email' 
                    className='border p-3 rounded-lg' 
                    id='email' 
                    onChange={handleChange} 
                    value={formData.email || ''} 
                />
                <label htmlFor='password' className='hidden'>Password</label>
                <input 
                    type="password" 
                    placeholder='Password' 
                    className='border p-3 rounded-lg' 
                    id='password' 
                    onChange={handleChange} 
                    value={formData.password || ''} 
                />
                <button 
                    type="submit" 
                    className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
                    disabled={loading}
                >
                    Sign up
                </button>
                <OAuth />
            </form>
            <div className="flex gap-2 mt-5">
                <p>Have an account?</p>
                <Link to={"/login"}>
                <span className='text-blue-700'>Sign in</span>
                </Link>
            </div>
            </div>
        </>
    )
}