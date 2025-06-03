export const metadata = {
  title: "Gym Log App",
  description: "Track and manage your gym workouts",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
