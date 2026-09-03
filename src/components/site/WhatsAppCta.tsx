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
  variant,
  size = "xl",
  className = "bg-[#25D366] text-white hover:bg-[#1ebe5b]",
  label = "Join the Community",
}: Props) {
  const href = whatsappHref();
  const external = href.startsWith("http");

  return (
    <Button
      asChild
      variant={variant ?? "default"}
      size={size}
      className={className}
    >
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
