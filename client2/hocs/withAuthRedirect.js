import { useRouter } from "next/router";
import { useAuth } from "../providers/Auth";

function DefaultLoadingFallback() {
  return <p>Loading...</p>;
}

// hoc interface
// fetch the context from provider
export default function withAuthRedirect({
  children,
  LoadingComponent = DefaultLoadingFallback,
  expectedAuth,
  href,
}) {
  // check context
  const WithAuthRedirectWrapper = (props) => {
    const router = useRouter();
    const { isLoading, isAuthenticated } = useAuth();

    if (isLoading) {
      return <LoadingComponent />;
    }
    if (typeof window !== "undefined" && expectedAuth !== isAuthenticated) {
      router.push(href);
      return <></>;
    }
    return <children {...props} />;
  };
  return WithAuthRedirectWrapper;
}
