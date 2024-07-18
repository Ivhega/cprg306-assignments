"use client"
import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function SignInPage(){

    const {user, gitHubSignIn, firebaseSignOut} = useUserAuth();

    async function handleSignIn(){
        try{
            await gitHubSignIn();
        } catch (error){
            console.log(error)
        }
    }

    async function handleSignOut(){
        try{
            await firebaseSignOut();
        } catch (error){
            console.log(error)
        }
    }

    //console.dir(user)

    return(
        <main className="flex flex-col items-center justify-center h-screen">
            <header className="mb-8">
                <h1 className="text-3xl">Firebase Auth</h1>
            </header>
            { user ? (
                <div className="text-center">
                    <p>Welcome {user.displayName}</p>
                    <p>{user.email}</p>
                    <img className="w-8 h-8 rounded-full mx-auto mt-4" src={user.photoURL}></img>
                    <p className="mt-4">
                        <Link className="text-blue-500 hover:underline" href="/week-8/shopping-list/">Shopping List</Link>
                    </p>
                    <button onClick={handleSignOut} className="text-lg mt-4 text-blue-500 hover:underline">Sign Out</button>
                </div>
            ) : (
                <div>
                    <button onClick={handleSignIn} className="text-lg mt-4 text-blue-500 hover:underline">Sign In</button>
                </div>
            ) }
        </main>
    );
}
