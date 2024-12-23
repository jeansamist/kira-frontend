import { type TemplateProps } from "rasengan";
import { ReactNode } from "react";

export default function Template({
  children,
  Head,
  Body,
  Script,
}: TemplateProps & { children: ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/rasengan.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Body>
        {children}

        <Script />
      </Body>
    </html>
  );
}
