import './global.css';

export const metadata = {
  title: 'Devaily',
  description: 'The developer\'s daily homepage',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
