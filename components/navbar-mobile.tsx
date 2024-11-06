'use client';
import { useState } from "react"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet"
import { Button, buttonVariants } from "./ui/button";
import { MenuIcon } from "lucide-react";
import { LinkProps } from "next/link";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { LoginLink, LogoutLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string
}

function MobileLink({
  href, 
  onOpenChange, 
  className, 
  children, 
  ...props}: MobileLinkProps) {
    return(
      <Link href={href} onClick={() => onOpenChange?.(false)} className={cn(className)} {...props}>
        {children}
      </Link>
    )
  }

const Navbarmobile = ({user}: { user: KindeUser<object>}) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild
      className="flex md:hidden">
        <Button className={buttonVariants({variant: "outline", className:"text-gray-900"})}>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <SheetTitle>
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pr-10">
          <div className="flex flex-col space-y-3">
          <MobileLink href='/generate' onOpenChange={setOpen}>
            Generate
          </MobileLink>
            <MobileLink href='/guidelines' onOpenChange={setOpen}>
              Guidelines
            </MobileLink>
            {user ? (
              <div className="text-xs text-gray-500 flex flex-col gap-2">
                <MobileLink href='/dashboard'>Dashboard</MobileLink>
                <LogoutLink className={buttonVariants({variant: "default"})}>Logout</LogoutLink>
              </div>
            ):(
              <div className="flex flex-col space-y-3">
                <LoginLink className={buttonVariants({variant: "ghost"})}>Login</LoginLink>
                <RegisterLink className={buttonVariants({variant: "default"})}>Signup</RegisterLink>
              </div>

            )}
          </div>
        </ScrollArea>          
        </SheetTitle>
      </SheetContent>
    </Sheet>
  )
}

export default Navbarmobile;
