import React from 'react';
import { Auth0Provider as BaseAuth0Provider, Auth0ProviderOptions } from "@auth0/auth0-react";

export interface Auth0ProviderProps extends Auth0ProviderOptions {
  children: React.ReactNode;
}

const Auth0Provider = ({ children, ...props }: Auth0ProviderProps): React.ReactElement => {
  const options: Auth0ProviderOptions = {
    ...props,
    redirectUri: typeof window !== "undefined" ? window.location.origin : undefined,
    cacheLocation: "localstorage",
  };
  return <BaseAuth0Provider {...options}>{children}</BaseAuth0Provider>;
};

export type TailwindButtonProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string,
  className: string
};

export function TailwindButton({ text, className }: TailwindButtonProps) {
  return (
    <Auth0Provider domain="" clientId="">
      <button className={className}>
        {text}
      </button>
    </Auth0Provider>
  );
}
