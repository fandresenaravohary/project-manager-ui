import type { SignupFormData } from "@/routes/auth/Sign-up"
import { useMutation } from "@tanstack/react-query"

export const useSignMutation = () => {
    return useMutation({
        mutationFn: (data: SignupFormData) => SignUp(data)
    })
}