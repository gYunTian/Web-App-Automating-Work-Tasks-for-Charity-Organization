import withAuthRedirect from "./withAuthRedirect";

// redirect to href if not authenticated
export default function withAuth(children, href = "/front") {
  return withAuthRedirect({ children, href, expectedAuth: true });
}
