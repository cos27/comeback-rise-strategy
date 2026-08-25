import { MessageCircle } from "lucide-react";

import { Button, type ButtonProps } from "@/components/ui/button";
import { whatsappHref } from "@/lib/cos";

type Props = {
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
  className?: string;
  label?: string;
};

export function WhatsAppCta({
  variant = "outlinePlum",
  size = "xl",
  className,
  label = "Chat with COS on WhatsApp",
}: Props) {
  const href = whatsappHref() ?? "#contact";
  const external = href.startsWith("http");

  return (
    <Button asChild variant={variant} size={size} className={className}>
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        <MessageCircle aria-hidden="true" />
        {label}
      </a>
    </Button>
  );
}
