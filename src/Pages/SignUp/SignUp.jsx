import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthProvider';

export default function SignUp() {

    const { createUser, updateUser } = useContext(AuthContext)

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [signUperror, setSignUperror] = useState('')

    const handleSignUp = (data) => {
        setSignUperror('')
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast("User Create Successfully")
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => { })
                    .catch(err => console.log(err))
            })
            .catch(error => {
                setSignUperror(error.message)
                console.log(error)
            })
    }


    return (
        <div className='h-[800px] flex justify-center items-center '>
            <div className='w-96 shadow-md p-9 rounded-lg'>
                <h2 className='text-2xl text-center mb-5'>Sign UP</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs mx-auto mb-3">
                        <label className="label"> <span className="label-text">Name</span> </label>
                        <input
                            type="text"
                            {...register("name", {
                                required: "Name Is Required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-600' role="alert">{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs mx-auto mb-3">
                        <label className="label"> <span className="label-text">Email</span> </label>
                        <input
                            type="email"
                            {...register("email", {
                                required: "Email is Required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600' role="alert"> {errors.email?.message} </p>}
                    </div>
                    <div className="form-control w-full max-w-xs mx-auto mb-3">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            {...register("password", {
                                required: "Password is Required",
                                minLength: {
                                    value: 6,
                                    message: "Password More Then 6 Character"
                                }
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-600' role="alert"> {errors.password?.message} </p>}
                    </div>
                    <input className='btn btn-accent w-full mx-auto mt-2 mb-2 text-white' value="SIGN UP" type="submit" />
                    {signUperror && <p className='text-red-600'> {signUperror} </p>}
                </form>
                <p>Already Have an Account <Link className='text-primary' to="/login">Please Login</Link></p>
                <div className="divider mb-5">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    )
}
