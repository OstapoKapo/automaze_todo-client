import { loginUser } from "@/api/auth"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation";

export const useLoginMutation = () => {
    const router = useRouter();
    return useMutation({
        mutationFn: loginUser,
        retry: 1,
        retryDelay: 1000,
        onSuccess: () => {
            router.push("/dashboard");
        },
    })
}