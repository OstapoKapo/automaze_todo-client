import { loginUser } from "@/api/auth"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation";

export const useLoginMutation = () => {
    const router = useRouter();
    return useMutation({
        mutationFn: loginUser,
        onSuccess: () => {
            router.push("/dashboard");
        },
    })
}