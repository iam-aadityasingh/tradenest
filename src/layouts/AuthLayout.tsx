export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black h-full w-full">
      {children}
    </div>
  );
}
