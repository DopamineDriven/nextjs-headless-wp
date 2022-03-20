import { ReactNode, VFC } from "react";
import cn from "classnames";
import css from "./create-an-account.module.css";
import {
  GravityPostTypeQuery,
  GetGravityFormQuery
} from "@/graphql/generated/graphql";
import { Enumerable } from "@/types/helpers";
import { Logo, Search } from "@/components/Icons";
import Link from "next/link";
import { useRouter } from "next/router";
import { Container } from "@/components/UI";
import { htmlToReact } from "@/lib/html-to-react";

export interface CreateAnAccountWrapperProps {
  className?: string;
  wrapper?: GravityPostTypeQuery["gform"];
  children?: Enumerable<ReactNode>;
}

const CreateAnAccountWrapper: VFC<CreateAnAccountWrapperProps> = ({
  children,
  className,
  wrapper
}) => {
  const router = useRouter();
  const {
    locale,
    locales,
    isLocaleDomain,
    domainLocales,
    defaultLocale,
    pathname,
    asPath,
    query
  } = router;
  return (
    <Container
      clean
      className={className ? className : ""}
      aria-labelledby={wrapper?.title ? wrapper.title : "Create An Account"}>
      <div>
        <div>
          <h2>
            {wrapper?.title ? htmlToReact(wrapper.title) : "Create An Account"}
          </h2>
          <div className='sm:mx-auto sm:w-full sm:max-w-2xl'>
            <Logo className='mx-auto min-w-full w-32 h-18' aria-hidden='true' />
          </div>
          <div>
            <div />
          </div>
          <div>
            {wrapper?.content
              ? htmlToReact(wrapper.content)
              : "Create an account to enhance your experience "}{" "}
          </div>
        </div>
        <div>
          <dl>
            <div>
              <div>
                <div>{children}</div>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </Container>
  );
};

export default CreateAnAccountWrapper;

/* <div className='sm:mx-auto sm:w-full sm:max-w-2xl'>
  <div className='max-w-5xl'>
    <Logo className='mx-auto min-w-full w-32 h-18' aria-hidden='true' />
  </div>
  <h2 className='mt-6 text-center text-3xl font-bold text-gray-900'>
    Create a new account
  </h2>
  <p className='mt-2 text-center text-sm text-gray-600'>
    Or{" "}
    <Link
      passHref
      scroll={true}
      href='/gravity/[uri]'
      as='/gravity/login'>
      <a className='font-medium text-blue-600 hover:text-blue-500'>
        Sign in to an existing account
      </a>
    </Link>
  </p>
</div>
<div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
  <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
    {children}
  </div>
</div> */
