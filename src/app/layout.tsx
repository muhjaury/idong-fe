import WidgetProvider from "@/context";
import Providers from "@/redux/Provider";
import "./global.scss";

export const metadata = {
  title: "SMKS Karya Teknik Watangsoppeng",
  description: "Portal Sekolah SMKS Karya Teknik Watangsoppeng",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <WidgetProvider>{children}</WidgetProvider>
        </Providers>
      </body>
    </html>
  );
}
