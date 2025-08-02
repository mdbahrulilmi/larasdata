import AuthProvider from "@/utils/auth-provider";
import "../globals.css";
export default function LoginLayout({children}:{children:React.ReactNode}){
    return(
       <html>
        <body>
            <AuthProvider>
            {children}
            </AuthProvider>
        </body>
       </html>
    )
}