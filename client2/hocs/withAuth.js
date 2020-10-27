import withAuthRedirect from "./withAuthRedirect";

// redirect to href if not authenticated
export default function withAuth(WrappedComponent, location = '/login') {
  return withAuthRedirect({
    WrappedComponent,
    location,
    expectedAuth: false
  });
}

