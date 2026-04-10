import {z} from "zod";
import bcrypt from 'bcrypt';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const registerSchema = z.object({
    email : z.string().min(2, "Must have morethan 2 characters")
    .refine( val => emailRegex.test(val) , "Email is required"),
    password : z.string().min(3, "Password must be morethan 3 characters"),
    confirmPassword : z.string().min(2, "Confirm password is required"),
    role: z.enum(["USER", "ADMIN"]).optional().default("USER") 
}).refine( inp => inp.password === inp.confirmPassword, {
    message : "Password do not match",
    path : ["confirmPassword"]
}).transform( async data => ({
    email: data.email,
    password: await bcrypt.hash(data.password, 8),
    role: data.role
}))


export const loginSchema = z.object({
    email : z.string().min(2, "Email is required")
    .refine( val => emailRegex.test(val) , {
        message : "Email invalid"
    }),
    password : z.string().min(3, "Password must be least 3 characters")
}).transform(data => ({
    email: data.email,
    password: data.password
}))


export const updateSchema = z.object({
    email : z.string().min(2, "Must have morethan 2 characters")
    .refine( val => emailRegex.test(val) , "Email is required").optional(),
    password : z.string().min(3, "Password must be morethan 3 characters").optional(),
    name : z.string().min(2, "Name must be morethan 2 characters").optional(),
    profileImg: z.string().url().optional()
})