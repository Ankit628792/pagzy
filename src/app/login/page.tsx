"use client";
import { account, ID } from "@/appwrite";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const LoginPage = () => {
    const [loggedInUser, setLoggedInUser] = useState<any>(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false);

    const login = async (email: string, password: string) => {
        if (!email || !password || !name) {
            return;
        }
        try {
            setLoading(true);
            const session = await account.createEmailPasswordSession(email, password);
            let user = await account.get();
            setLoading(false);
            if (user) {
                window.location.pathname = '/'
            }

        } catch (error: any) {
            console.log({ error })
            if (error.code == 401) {
                register()
            }
            else {
                setLoading(false)
            }
        }
    };

    const register = async () => {
        try {
            await account.create(ID.unique(), email, password, name);
            login(email, password);
        } catch (error) {
            console.log({ error })
        }
        finally {
            setLoading(false);
        }
    };


    if (loggedInUser) {
        return (
            <div>
                <p>Logged in as {loggedInUser.email}</p>

            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-background text-foreground py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-lg w-full space-y-8 bg-black p-10 lg:p-16 rounded-xl">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold">
                        {loggedInUser ? 'Welcome Back!' : 'Access to Pagzy'}
                    </h2>
                </div>
                <form className="mt-8 space-y-6">
                    <div className="rounded-md shadow-sm space-y-4">
                        <div>
                            <label htmlFor="name" className="sr-only">
                                Name
                            </label>
                            <Input
                                id="name"
                                name="name"
                                type="text"
                                required
                                placeholder="Your Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <Input
                                id="email-address"
                                name="email"
                                type="email"
                                required
                                placeholder="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                required
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="button"
                            onClick={() => login(email, password)}
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Access Now
                        </button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default LoginPage;
