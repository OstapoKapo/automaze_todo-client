import { registerUser } from "@/api/auth";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const useRegisterMutation = () => {
    return useMutation({
        mutationFn: registerUser,
        retry: false,
    })
}