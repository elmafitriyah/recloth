'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface FormData {
    Username: string;
    Email: string;
    Password: string;
    Telepon: string;
}

export default function SignUp() {
    const [formData, setFormData] = useState<FormData>({
        Username: '',
        Email: '',
        Password: '',
        Telepon: ''
    });

    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(null);

        try {
            const response = await fetch('https://tech-class.datacore.machinevision.global/items/User_Recloth', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer vh073_EDr_XuWQ0PO1nm-ulUt6kUJmOh' 
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error(`Failed to sign up: ${response.statusText}`);
            }

            const result = await response.json();
            console.log('Response:', result);
            setSuccess('Registration successful!');
            router.push('/login'); 
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message); 
            } else {
                setError('An unknown error occurred'); 
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="signUp" style={{ backgroundImage: `url('/image/bgLogin.jpg')`, height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className="form-logIn" style={{ backgroundColor: 'white', padding: '20px', width: '50%', height: '80%', borderRadius: '20px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <form
                    onSubmit={handleSubmit}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: '80%',
                    }}
                >
                    <h1 style={{ textAlign: 'center', fontSize: '30px', fontWeight: 'bold', paddingBottom: '6%' }}>Sign Up</h1>

                    <input
                        type="text"
                        name="Username"
                        placeholder="Username"
                        value={formData.Username}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
                    />

                    <input
                        type="email"
                        name="Email"
                        placeholder="Email"
                        value={formData.Email}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
                    />

                    <input
                        type="password"
                        name="Password"
                        placeholder="Password"
                        value={formData.Password} onChange={handleChange} required style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ccc' }}/>

                    <input type="tel" name="Telepon" placeholder="Telepon" value={formData.Telepon} onChange={handleChange} required style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ccc' }}/>

                    <button type="submit" style={{ width: '100%', padding: '12px', borderRadius: '10px', border: 'none', backgroundColor: '#F5AE06', color: 'black', fontSize: '16px', cursor: 'pointer',}}>
                        {loading ? 'Loading...' : 'Sign Up'}
                    </button>

                    {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
                    {success && <p style={{ color: 'green', marginTop: '10px' }}>{success}</p>}

                    <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px', fontSize: '14px' }}>
                        <h6 style={{ margin: '0' }}>Already have an account?</h6>
                        <Link href="/login">
                            <p style={{ margin: '0', marginLeft: '5px', color: isHovered ? '#F5AE06' : 'black', cursor: 'pointer',}}
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                Log In
                            </p>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
