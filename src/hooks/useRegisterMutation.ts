import { registerUser } from "@/api/auth";
import { useMutation } from "@tanstack/react-query";

export const useRegisterMutation = () => {
    return useMutation({
        mutationFn: registerUser,
        retry: false,
    })
}