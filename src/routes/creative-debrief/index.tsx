import { createFileRoute, redirect } from "@tanstack/react-router";

  export const Route = createFileRoute("/creative-debrief/")({
    beforeLoad: () => {
      throw redirect({ to: "/creative-debrief/me-nu", statusCode: 301 });
    },
  });
