import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const nextauthConfig: NextAuthOptions = {
  providers: [
    Credentials({
      name: "RouteAPI",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(userData) {
        try {
          const res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signin", {
            method: "POST",
            body: JSON.stringify({
              email: userData?.email,
              password: userData?.password,
            }),
            headers: { "Content-Type": "application/json" },
          });

          const finalRes = await res.json();

          // التحقق من نجاح الطلب بناءً على رد API Route
          if (res.ok && finalRes.message === "success") {
            // إرجاع كائن المستخدم مع التوكن
            return {
              id: finalRes.user.email, 
              name: finalRes.user.name,
              email: finalRes.user.email,
              tokenFromBackend: finalRes.token, 
            };
          }
          
          // في حالة فشل البيانات (باسورد غلط مثلاً)
          console.log("Login Failed:", finalRes.message);
          return null; 
        } catch (error) {
          console.error("Network Error:", error);
          return null;
        }
      },
    }),
  ],
  
  pages: {
    signIn: "/Login", // تأكد إن اسم الفولدر عندك Login كابيتال
  },

  callbacks: {
    async jwt({ token, user }) {
      // تخزين بيانات المستخدم والتوكن داخل الـ JWT عند أول تسجيل دخول
      if (user) {
        token.user = user;
        token.tokenFromBackend = (user as any).tokenFromBackend;
      }
      return token;
    },
    async session({ session, token }: any) {
      // نقل البيانات من الـ JWT إلى الـ Session لتصبح متاحة في واجهة المستخدم
      if (token.user) {
        session.user = token.user;
        session.tokenFromBackend = token.tokenFromBackend;
      }
      console.log("Active Session:", session);
      return session;
    }
  },

  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60, // يوم واحد
  },
  
  secret: process.env.NEXTAUTH_SECRET, // مهم جداً يكون موجود في ملف .env
};