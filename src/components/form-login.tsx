import { ButtonSocialLogin } from "./button-social-login";
import { Card } from "./ui/card";


export function FormLogin() {
  return (
    <Card className="space-y-12 py-12 w-full max-w-[450px] mt-16 rounded-md p-4">
      <h3 className="text-center">Login</h3>
      <div className="flex flex-col items-center justify-center space-y-4">
        <ButtonSocialLogin size="lg" provider="google">Google</ButtonSocialLogin>
        <ButtonSocialLogin size="lg" provider="github">Github</ButtonSocialLogin>
      </div>
    </Card>
  )
}
